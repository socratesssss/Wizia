import React from 'react'
import Box from '@mui/material/Box';

import DrawerAppBar from './Component/Navbar';

import Hero from './Component/Hero';
import Branding from './Component/Branding';
import Blog from './Blog';
import Train from './Component/Train';
import GetStarted from './Component/GetStarted';

function App() {
  return (
    <section className='bg-[#002228]'>
    <DrawerAppBar/>


<Hero/>
<Branding/>
<Blog/>
<Train/>
<GetStarted/>

    </section>
  )
}

export default App 