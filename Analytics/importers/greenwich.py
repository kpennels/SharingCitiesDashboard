'''
This importer imports data from Greenwich ArcGIS REST API. 

Description:
    
    GreenwichMeta, GreenwichMeta_2, GreenwichOCC, GreenwichOCC_2 import data related to Smart Parking as well
    as metadata related to the type of parking bays. Specifically, the metadata consist of two layers with similar structure. The only difference is in the baytype values
    with the first one having "Disabled" and "Pay & Display" while the second "Car Club Bay", "Shared Coach Bays" and
    "EV Bay". In terms of tables, the API provides attributes related to the status of the sensors.

    The  classes GreenwichOCC and GreenwichOCC_2 are dependent upon GreenwichMeta and GreenwichMeta_2 
    thus these 'meta' classes needs to be imported first before importing GreenwichOCC and GreenwichOCC_2.

    Both the classes share the same API key.
    The classes doesn't have any bespoke code apart from calling urls and converting them into dataframes.
    Once that is done it calls the create_datasource method of the base class which saves the sensors, attributes,
    location, creates data tables and saves values.

    example responses:
        gla_gis.gisapdata.sharingcities_smartparking_meta:
        {
           "attributes": {
            "index": 0,
            "baycount": 1,
            "baytype": "Disabled",
            "city": "London",
            "hassensor": 1,
            "isunmarked": 0,
            "latitude": 51.749209039999997,
            "locationcode": null,
            "longitude": -1.2592903120000001,
            "lotcode": "101",
            "maxstayperiod": null,
            "operatinghourcode": "Schedule1",
            "paymentprovidercode": null,
            "street": "Albion Place",
            "subzone": "1",
            "tariffcode": "Disabled",
            "ward": "1",
            "zone": "1",
            "run_time_stamp": 1544003393000,
            "ESRI_OID": 1
           },
           "geometry": {
            "x": -140183.55629999936,
            "y": 6754905.6415000036
           }
        }

        gla_gis.gisapdata.sharingcities_smartparking_occ:
        {
           "attributes": {
            "free": 2,
            "isoffline": 0,
            "lotcode": 135,
            "occupied": 0,
            "run_time_stamp": 1539214505000
           }
    
    Importers GreenwichKiwiPump and GreenwichWholeHouse import layer energy related data from Ernest Dence Boiler House and household
    energy consumption data.
    It is not clear whether they relate to timeseries or individual sensors, and at the moment these are treated
    as a single sensor. The data appears to be static and this is reflected on REFRESH_TIME_KIWI and REFRESH_TIME_KIWI_HOUSE.
    Also note that new Units and Subtheme are needed for these importers.

    example units table:

        id |    _type    | description |         timestamp
    ----+-------------+-------------+----------------------------
     1 | kg          | Kilogram    | 2018-12-03 12:54:04.782258
     2 | g           | Grams       | 2018-12-03 12:54:04.782298
     3 | km          | KiloMeter   | 2018-12-03 12:54:04.782332
     4 | kW          | kilowatt    | 2019-01-29 14:12:17.7864
     5 | lx          | lux         | 2019-01-29 14:16:52.939201
     6 | temperature | celsius     | 2019-01-29 14:20:13.865564
    
    example subtheme table:

        id | t_id |    name    |         timestamp
    ----+------+------------+----------------------------
     1 |    1 | Airquality | 2018-12-03 12:54:04.814307
     2 |    2 | Traffic    | 2018-12-03 12:54:04.81434
     3 |    1 | Energy     | 2019-01-29 14:13:35.181018


    example responses:
        kiwi_residential_sample_minute

          {
           "attributes": {
            "OBJECTID": 1,
            "time": 1515369600000,
            "power_wm_sid_761573_wholehouse": 0.23000000000000001,
            "light_avg_lux_sid_400191_e_room": 6.4400000000000004,
            "temp_avg_degc_sid_400191_e_room": 21.399999999999999
           }

        kiwi_ernestdence_boiler_pump_minute

          {
           "attributes": {
            "OBJECTID": 6,
            "site": "Ernest Dence Boiler House",
            "meter": "Boiler room pumps",
            "time_": 1515456300000,
            "value_kw": 19
           }

    Importer GreenwichSiemens imports data from gla_gis.gisapdata.sharingcities_siemens_energy layer. 
    
    example resposnse:

      {
       "attributes": {
        "date_time": 1518114600000,
        "b1_heat_value": 316,
        "b1_flow_value": null,
        "b1_temp_out_value": null,
        "b1_temp_back_value": null,
        "b2_heat_value": 350.30000000000001,
        "b2_flow_value": null,
        "b2_temp_out_value": null,
        "b2_temp_back_value": null,
        "b3_heat_value": 183.09999999999999,
        "b3_flow_value": null,
        "b3_temp_out_value": null,
        "b3_temp_back_value": null,
        "run_time_stamp": 1538728002000
       }
      }
'''

import os, sys
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from importers.base import BaseImporter, Location, get_config
from models.sensor import Sensor
from models import location
from db import db

config = get_config()
config = config[config['environment']]['greenwich_meta']

API_NAME = config['API_NAME']
BASE_URL = config['BASE_URL']
REFRESH_TIME = config['REFRESH_TIME']
API_KEY = config['API_KEY']
TOKEN_EXPIRY = config['TOKEN_EXPIRY']
REFRESH_URL = config['REFRESH_URL']
API_CLASS = config['API_CLASS']

class GreenwichMeta(BaseImporter):
    def __init__(self):
        super().__init__(API_NAME, BASE_URL, REFRESH_TIME, API_KEY, API_CLASS, TOKEN_EXPIRY)

    def _create_datasource(self, headers=None):
        super()._create_datasource(headers)
        self.df  = self.create_dataframe(ignore_object_tags=['fieldAliases', 'fields'])

        loc = Location('latitude', 'longitude')
        self.create_datasource(dataframe= self.df, sensor_tag='lotcode', attribute_tag=['baycount', 'baytype'], 
                                unit_value=[], bespoke_unit_tag=[], description=[], bespoke_sub_theme=[], 
                                location_tag=loc, sensor_prefix='smart_parking_', api_timestamp_tag='run_time_stamp',
                                is_dependent=True)

    def _refresh_token(self, *args):
        print('Token expired Refresh it manually')


config = get_config()
config = config[config['environment']]['greenwich_occ']

API_NAME_OCC = config['API_NAME']
BASE_URL_OCC = config['BASE_URL']
API_CLASS_OCC = config['API_CLASS']

class GreenwichOCC(BaseImporter):
    def __init__(self):
        super().__init__(API_NAME_OCC, BASE_URL_OCC, REFRESH_TIME, API_KEY, API_CLASS_OCC, TOKEN_EXPIRY)

    def _create_datasource(self, headers=None):
        super()._create_datasource(headers)
        self.df  = self.create_dataframe(ignore_object_tags=['fieldAliases', 'fields'])

        names = self.df['lotcode'].tolist()
        name_set = set()
        location_sensor = {}
        sensor_location = {}
        latitude = []
        longitude = []

        for s in names:
            name_set.add('smart_parking_' + str(s))

        sensors = Sensor.get_by_name_in(name_set)
        loc_ids = []
        for s in sensors:
            loc_ids.append(s.l_id)
            location_sensor[s.l_id] = s
        locations = location.Location.get_by_id_in(loc_ids)

        for loc in locations:
            if loc.id in location_sensor:
                _sensor = location_sensor[loc.id]
                sensor_location[_sensor.name] = loc
       
        for s in names:
            _s = 'smart_parking_' + str(s)
            if _s in sensor_location:
                latitude.append(sensor_location[_s].lat)
                longitude.append(sensor_location[_s].lon)

        self.df['latitude'] = latitude
        self.df['longitude'] = longitude
        loc = Location('latitude', 'longitude')
        self.create_datasource(dataframe= self.df, sensor_tag='lotcode', attribute_tag=['free', 'isoffline', 'occupied'], 
                                unit_value=[], bespoke_unit_tag=[], description=[], bespoke_sub_theme=[], location_tag=loc,
                                sensor_prefix='smart_parking_', api_timestamp_tag='run_time_stamp', is_dependent=True)

    def _refresh_token(self, *args):
        print('Token expired Refresh it manually')



config = get_config()
config = config[config['environment']]['greenwich_meta_2']

API_NAME_2 = config['API_NAME']
BASE_URL_2 = config['BASE_URL']
API_CLASS_2 = config['API_CLASS']

class GreenwichMeta_2(BaseImporter):
    def __init__(self):
        super().__init__(API_NAME_2, BASE_URL_2, REFRESH_TIME, API_KEY, API_CLASS_2, TOKEN_EXPIRY)

    def _create_datasource(self, headers=None):
        super()._create_datasource(headers)
        self.df  = self.create_dataframe(ignore_object_tags=['fieldAliases', 'fields'])

        ### Renaming the columns so that they are not confused with GreenwichMeta
        self.df.rename(index=str, columns={'baycount': 'baycount_2',
                       'baytype': 'baytype_2'}, 
                      inplace=True)

        loc = Location('latitude', 'longitude')
        self.create_datasource(dataframe= self.df, sensor_tag='lotcode', attribute_tag=['baycount_2', 'baytype_2'], 
                                unit_value=[], bespoke_unit_tag=[], description=[], bespoke_sub_theme=[], 
                                location_tag=loc, sensor_prefix='smart_parking_2_', api_timestamp_tag='run_time_stamp',
                                is_dependent=True)

    def _refresh_token(self, *args):
        print('Token expired Refresh it manually')


config = get_config()
config = config[config['environment']]['greenwich_occ_2']

API_NAME_OCC_2 = config['API_NAME']
BASE_URL_OCC_2 = config['BASE_URL']
API_CLASS_OCC_2 = config['API_CLASS']

class GreenwichOCC_2(BaseImporter):
    def __init__(self):
        super().__init__(API_NAME_OCC_2, BASE_URL_OCC_2, REFRESH_TIME, API_KEY, API_CLASS_OCC_2, TOKEN_EXPIRY)

    def _create_datasource(self, headers=None):
        super()._create_datasource(headers)
        self.df  = self.create_dataframe(ignore_object_tags=['fieldAliases', 'fields'])

        names = self.df['lotcode'].tolist()
        name_set = set()
        location_sensor = {}
        sensor_location = {}
        latitude = []
        longitude = []

        for s in names:
            name_set.add('smart_parking_2_' + str(s))

        sensors = Sensor.get_by_name_in(name_set)
        loc_ids = []
        for s in sensors:
            loc_ids.append(s.l_id)
            location_sensor[s.l_id] = s
        locations = location.Location.get_by_id_in(loc_ids)

        for loc in locations:
            if loc.id in location_sensor:
                _sensor = location_sensor[loc.id]
                sensor_location[_sensor.name] = loc
       
        for s in names:
            _s = 'smart_parking_2_' + str(s)
            if _s in sensor_location:
                latitude.append(sensor_location[_s].lat)
                longitude.append(sensor_location[_s].lon)

        self.df['latitude'] = latitude
        self.df['longitude'] = longitude

        ### Renaming the columns so that they are not confused with GreenwichOCC
        self.df.rename(index=str, columns={'free': 'free_2',
                       'isoffline': 'isoffline_2',
                       'occupied' : 'occupied_2'}, 
                      inplace=True)

        loc = Location('latitude', 'longitude')
        self.create_datasource(dataframe= self.df, sensor_tag='lotcode', attribute_tag=['free_2', 'isoffline_2', 'occupied_2'], 
                                unit_value=[], bespoke_unit_tag=[], description=[], bespoke_sub_theme=[], location_tag=loc,
                                sensor_prefix='smart_parking_2_', api_timestamp_tag='run_time_stamp', is_dependent=True)

    def _refresh_token(self, *args):
        print('Token expired Refresh it manually')


config = get_config()
config_kiwi = config[config['environment']]['greenwich_kiwi']

API_NAME_KIWI = config_kiwi['API_NAME']
BASE_URL_KIWI = config_kiwi['BASE_URL']
API_CLASS_KIWI = config_kiwi['API_CLASS']
REFRESH_TIME_KIWI = config_kiwi['REFRESH_TIME']
TOKEN_EXPIRY_KIWI = config_kiwi['TOKEN_EXPIRY']

class GreenwichKiwiPump(BaseImporter):
    def __init__(self):
        super().__init__(API_NAME_KIWI, BASE_URL_KIWI, REFRESH_TIME_KIWI, API_KEY, API_CLASS_KIWI, TOKEN_EXPIRY_KIWI)

    def _create_datasource(self, headers=None):
        super()._create_datasource(headers)
        self.df  = self.create_dataframe(ignore_object_tags=['fieldAliases', 'fields'])

        ### Hardcoding the location 
        self.df['latitude'] =  51.485034
        self.df['longitude'] = -0.001097 
        self.df['attribute'] = 'ernest_dense_pumps'
        self.df['description'] = 'Ernest Dense Boiler room pumps'
        
        ### Faking a sensor id since the api returns data only from one sensor
        ### Need to modify it when the api starts sourcing data from more sensors
        self.df['tag'] = 0
        
        self.create_datasource_with_values(dataframe=self.df, sensor_tag='tag', attribute_tag='attribute', 
                                            value_tag='value_kw', latitude_tag='latitude', longitude_tag='longitude',
                                            description_tag='description', api_timestamp_tag='time_',
                                          unit_id = 4, sub_theme = 3)

    def _refresh_token(self, *args):
        print('Token expired Refresh it manually')

config = get_config()
config_kiwi_house = config[config['environment']]['greenwich_kiwi_house']

API_NAME_KIWI_HOUSE = config_kiwi_house['API_NAME']
BASE_URL_KIWI_HOUSE = config_kiwi_house['BASE_URL']
API_CLASS_KIWI_HOUSE = config_kiwi_house['API_CLASS']
REFRESH_TIME_KIWI_HOUSE = config_kiwi_house['REFRESH_TIME']
TOKEN_EXPIRY_KIWI_HOUSE = config_kiwi_house['TOKEN_EXPIRY']

class GreenwichWholeHouse(BaseImporter):
    def __init__(self):
        super().__init__(API_NAME_KIWI_HOUSE, BASE_URL_KIWI_HOUSE, REFRESH_TIME_KIWI_HOUSE, API_KEY, API_CLASS_KIWI_HOUSE, TOKEN_EXPIRY_KIWI_HOUSE)

    def _create_datasource(self, headers=None):
        super()._create_datasource(headers)
        self.df  = self.create_dataframe(ignore_object_tags=['fieldAliases', 'fields'])

        ### Hardcoding the location 
        self.df['latitude'] = 51.484216
        self.df['longitude'] = 0.002162
        self.df['description'] = 'residential house energy consumption'
        
        ### Faking a sensor id since the api returns data only from one sensor
        ### Need to modify it when the api starts sourcing data from more sensors
        self.df['tag'] = 0

        #### the attribute names are too big for name+hashing as table names.
        self.df.rename(index=str, columns={'power_wm_sid_761573_wholehouse': 'power_sid_761573',
                       'light_avg_lux_sid_400191_e_room': 'avg_lux_sid_400191',
                       'temp_avg_degc_sid_400191_e_room' : 'temp_sid_400191'}, 
                      inplace=True)
        
        loc = Location('latitude', 'longitude')
        
        self.create_datasource(dataframe=self.df, sensor_tag='tag', attribute_tag=['power_sid_761573',
                                                                                  'avg_lux_sid_400191',
                                                                                  'temp_sid_400191'], 
                                            unit_value=[4,5,6],bespoke_sub_theme=[3,3,1], 
                               bespoke_unit_tag=[4,5,6],
                               location_tag=loc,
                               description=['description','description','description'],
                               api_timestamp_tag='time',
                               sensor_prefix='',
                               is_dependent=True)

    def _refresh_token(self, *args):
        print('Token expired Refresh it manually')

config = get_config()
config_siemens= config[config['environment']]['greenwich_siemens']

API_NAME_SIEMENS = config_siemens['API_NAME']
BASE_URL_SIEMENS = config_siemens['BASE_URL']
API_CLASS_SIEMENS = config_siemens['API_CLASS']
REFRESH_TIME_SIEMENS = config_siemens['REFRESH_TIME']
TOKEN_EXPIRY_SIEMENS = config_siemens['TOKEN_EXPIRY']

class GreenwichSiemens(BaseImporter):
    def __init__(self):
        super().__init__(API_NAME_SIEMENS, BASE_URL_SIEMENS, REFRESH_TIME_SIEMENS, API_KEY, API_CLASS_SIEMENS, TOKEN_EXPIRY_SIEMENS)

    def _create_datasource(self, headers=None):
        super()._create_datasource(headers)
        self.df  = self.create_dataframe(ignore_object_tags=['fieldAliases', 'fields'])

        ### Hardcoding the location. As there is no information on the location of the sensor
        ### the centroid coordinates of Greenwich is used
        self.df['latitude'] = 51.482877
        self.df['longitude'] = -0.007516
        self.df['description'] = 'siemens energy'
        
        ### Faking a sensor id since the api returns data only from one sensor
        ### Need to modify it when the api starts sourcing data from more sensors
        self.df['tag'] = 0

        ### As of current behaviour _create_datasource method fails if the dataframe passed contains null values
        ### eg:  displayFieldName   date_time   b1_heat_value   b1_flow_value  
        ###      0  1521480600000   20  null
        ### The only way to import would be to drop the nulls but this will drop the row all together.
        ### We could choose a default value for nulls like -999 but there must be a more flexible way.
        ### For now (illustrative purposes) we just drop
        self.df.dropna(inplace=True)




        loc = Location('latitude', 'longitude')
        
        self.create_datasource(dataframe=self.df, sensor_tag='tag', attribute_tag=['b1_heat_value',
                                                                                  'b1_flow_value',
                                                                                  'b1_temp_out_value',
                                                                                  'b1_temp_back_value',
                                                                                  'b2_heat_value',
                                                                                  'b2_flow_value',
                                                                                  'b2_temp_out_value',
                                                                                  'b2_temp_back_value',
                                                                                  'b3_heat_value',
                                                                                  'b3_flow_value',
                                                                                  'b3_temp_out_value',
                                                                                  'b3_temp_back_value'], 
                                            unit_value=[],bespoke_sub_theme=[], 
                               bespoke_unit_tag=[],
                               location_tag=loc,
                               description=[],
                               api_timestamp_tag='run_time_stamp',
                               sensor_prefix='',
                               is_dependent=True)

    def _refresh_token(self, *args):
        print('Token expired Refresh it manually')
