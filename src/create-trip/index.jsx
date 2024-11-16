import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SelectBudgetOptions, SelectTravelList } from '@/constants/options';
import React, { useEffect, useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

function Createtrip() {
  const [place, setPlace] = useState();
  const [formData,setFormData]=useState([]);

  const handleInputChange=(name,value)=>{

    setFormData({
      ...formData,
      [name]:value
    })
  }

  useEffect(()=>{
    console.log(formData);
  },[formData])

  const generateTrip=()=>{
    if(formData?.noofdays>5){
      window.alert("Maximum value of no. of days can be 5");
      return;
    }
    console.log(formData);
  }

  return (
    <div className="relative min-h-screen bg-cover bg-center bg-[url('/public/image1.jpg')] py-16 px-5 sm:px-10 md:px-32 lg:px-56">
      <div className="absolute inset-0 bg-black opacity-50"></div> 
      <div className="relative z-10 text-white">
        <h2 className="text-4xl font-bold text-center md:text-left">Tell Us Your Travel Preferences 🌴</h2>
        <p className="text-xl text-gray-300 mt-3 text-center md:text-left">
          Simply provide some basic details, and our trip planner will create a personalized itinerary for you.
        </p>

        <div className="mt-12 space-y-10">
          <div>
            <h2 className="text-2xl font-medium">What is your preferred destination?</h2>
            <GooglePlacesAutocomplete
              apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
              selectProps={{
                place,
                onChange: (v) => {
                  setPlace(v);
                  handleInputChange('location',v);
                },
              }}
              className="mt-4 w-full bg-black bg-opacity-80 p-3 rounded-md shadow-md focus:outline-none"
            />
          </div>

          <div>
            <h2 className="text-2xl font-medium">How many days are you planning your trip?</h2>
            <Input
              placeholder="Ex. 3"
              type="number"
              className="mt-4 w-full p-3 bg-white text-black bg-opacity-80 rounded-md shadow-md focus:outline-none"
              onChange={(e)=>handleInputChange('noofdays',e.target.value)}
            />
          </div>

          <div>
            <h2 className="text-2xl font-medium">What is your budget?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-5">
              {SelectBudgetOptions.map((item, index) => (
                <div
                  key={index}
                  onClick={()=>handleInputChange('budget',item.title)}
                  className={`p-6 border border-gray-300 rounded-lg cursor-pointer hover:shadow-xl transition duration-300 
                  ease-in-out transform hover:scale-105 bg-white bg-opacity-70 ${formData?.budget==item.title&&'shadow-lg bg-slate-400 scale-105 border-black'}`}
                >
                  <div className="text-4xl text-blue-500">{item.icon}</div>
                  <h3 className="font-semibold text-lg mt-2 text-black">{item.title}</h3>
                  <p className="text-gray-900">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-medium">Who do you plan to travel with on your next adventure?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-5">
              {SelectTravelList.map((item, index) => (
                <div
                  key={index}
                  onClick={()=>handleInputChange('noofpeople',item.people)}
                  className={`p-6 border border-gray-300 rounded-lg cursor-pointer hover:shadow-xl transition duration-300 ease-in-out 
                  transform hover:scale-105 bg-white bg-opacity-70 ${formData?.noofpeople==item.people&&'shadow-lg bg-slate-400 scale-105 border-black'}`}
                >
                  <div className="text-4xl text-green-500">{item.icon}</div>
                  <h3 className="font-semibold text-lg mt-2 text-black">{item.title}</h3>
                  <p className="text-gray-900">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <Button onClick={generateTrip} className="w-full sm:w-1/3 py-3 text-xl text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none">
              Generate Trip
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Createtrip;
