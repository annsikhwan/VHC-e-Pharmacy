import React from 'react'

import {createRoot} from 'react-dom/client'
import Content from './Content';

import './style.scss'

const rootElement = document.getElementById('home-container');

createRoot(rootElement).render(<Content/>)