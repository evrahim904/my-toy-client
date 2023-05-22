import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {useEffect,  useState } from 'react';
import TabCar from '../Category/TabCar';






const CategoryTab = () => {
    const [cars, setCars] = useState([])
    const [sportsCar, setSportsCar] = useState([]);
    const [activeTab, setActiveTab] = useState("sports car")
    
    console.log(sportsCar)
    useEffect(() => {
        fetch('https://my-toys-server.vercel.app/adding')
            .then(res => res.json())
            .then(data => {

                setCars(data)

            })
    }, [])

    useEffect(() => {
        const result = cars?.filter((car) => car.category == activeTab)
        setSportsCar(result)
    }, [cars, activeTab])

   
    const handleTabClick = (tabName) => {
        setActiveTab(tabName)
    }
    return (
        <div className='text-center'>
            <Tabs>
               <h1 className='text-4xl text-violet-700 mb-3'> Toy car</h1>
                <hr />
                <TabList>
                    <Tab onClick={() => handleTabClick("sports car")}>sports car
                   {/* <img className='w-20 h-20' src={sportsCar[0].photo} alt="" /> */}
                    </Tab>
                    <Tab onClick={() => handleTabClick("truck")}>truck</Tab>
                    <Tab onClick={() => handleTabClick("police car")}> mini police car</Tab>
                </TabList>

                <TabPanel>
                   <div className='grid grid-cols-1 md:grid-cols-2'>
                   {
                        sportsCar.map(car => <TabCar
                        
                        key={car._id}
                        car={car}
                        ></TabCar>)
                    }
                   </div>
                   
                </TabPanel>
                <TabPanel>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                   {
                        sportsCar.map(car => <TabCar
                        
                        key={car._id}
                        car={car}
                        ></TabCar>)
                    }
                   </div>
                </TabPanel>
                <TabPanel>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                   {
                        sportsCar.map(car => <TabCar
                        
                        key={car._id}
                        car={car}
                        ></TabCar>)
                    }
                   </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default CategoryTab;