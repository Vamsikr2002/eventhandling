## Eventhandling
Project is for Handling events
- This project mainly takes the date lattitude and longitude as input and gives details of next upcoming events for next 14 days and also distance from userlocation and weather on the day of event
## Program Structure
- created two apis 

  1=> one for getting the the csv file and storing the records in mongodb 

  2=> the other one takes the date lattitude and longitude as the inputs and will return the events upcoming in next 14 days by calculating the distance from the userlocation to the event location and weather on that day
## Run
To test the api for finding events upcoming
curl --location 'https://shy-pink-foal-sock.cyclic.app/api/events/find' \
--header 'Content-Type: application/json' \
--data '{
    "date": "2024-03-27",
    "latitude": "12.34",
    "longitude": "56.78"
}'
To test the api for importing the csv file 
curl --location 'https://shy-pink-foal-sock.cyclic.app/upload' \
--form 'file=@“<Path to your csv file>“’



## Sample response

Sample response of events coming in next 14 days
![image](https://github.com/Vamsikr2002/eventhandling/assets/115055314/cbb61575-189f-4e76-88ae-0c4874c943ef)

