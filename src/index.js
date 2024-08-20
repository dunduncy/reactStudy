import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {RouterProvider} from 'react-router-dom'
import {sum} from '@/test'
import router from '@/router';

// 导入定制主体文件
import '@/theme.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<RouterProvider router={router}>
	</RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
