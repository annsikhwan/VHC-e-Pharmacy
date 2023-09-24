import React from 'react'

import {createRoot} from 'react-dom/client'
import Content from './Content';

const rootElement = document.getElementById('home-container');

createRoot(rootElement).render(<Content/>)