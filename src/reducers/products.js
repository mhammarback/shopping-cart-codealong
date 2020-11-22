import { createSlice } from '@reduxjs/toolkit'

const productData = [
    { id: 1, title: 'Socks', price: 100, emoji:'🧦' },
    { id: 2, title: 'T-shirt', price: 200, emoji:'👕'},
    { id: 3, title: 'Pants', price: 350, emoji:'👖'},
    { id: 4, title: 'Dress', price: 550, emoji:'👗'},
    { id: 5, title: 'Swimsuit', price: 210, emoji:'🩱'},
    { id: 6, title: 'Coat', price: 700, emoji:'🧥'},
    { id: 7, title: 'Backpack', price: 250, emoji:'🎒'},
    { id: 8, title: 'Hat', price: 180, emoji:'🎩'},
    { id: 9, title: 'Gloves', price:150, emoji: '🧤'}, 
    { id: 10, title: 'Shirt', price: 250, emoji:'👔'},
    { id: 11, title: 'Umberella', price:220, emoji:'🌂' },
    { id: 12, title:'Shorts', price:150, emoji:'🩳'},

]

export const products = createSlice({
    name:'products', 
    initialState: productData
})