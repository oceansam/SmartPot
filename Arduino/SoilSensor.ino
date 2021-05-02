#include <dht.h>
dht DHT;
//#include <dht_nonblocking.h>

#define DHT11_PIN 2
#define soilSensor A0

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
}

//static bool measure_environment( float *temperature, float *humidity )
//{
//  static unsigned long measurement_timestamp = millis( );
//
//  /* Measure once every four seconds. */
//  if( millis( ) - measurement_timestamp > 3000ul )
//  {
//    if( dht_sensor.measure( temperature, humidity ) == true )
//    {
//      measurement_timestamp = millis( );
//      return( true );
//    }
//  }
//
//  return( false );
//}


void loop() {
  int sensorVal = analogRead(soilSensor);
  int chk = DHT.read11(DHT11_PIN);
  Serial.println(sensorVal);
  Serial.println(DHT.temperature);
  Serial.println(DHT.humidity);
//  if (measure_environment(&temperature, &humidity) == true)
//  {
//    Serial.print("T = ");
//    Serial.print( temperature, 1 );
//    Serial.print( " deg. C, H = " );
//    Serial.print( humidity, 1 );
//    Serial.println( "%" );
//  }
    
    delay(2500);
}
