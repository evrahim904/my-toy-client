import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {useEffect,  useState } from 'react';
import TabCar from '../Category/TabCar';






const CategoryTab = () => {
    const [cars, setCars] = useState([])
    const [sportsCar, setSportsCar] = useState([]);
    const [activeTab, setActiveTab] = useState("sports")
    
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
                Toy car
                <hr />
                <TabList>
                    <Tab onClick={() => handleTabClick("sports car")}>sports car</Tab>
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