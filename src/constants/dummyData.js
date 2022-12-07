import icons from "./icons";
import images from "./images"

const CatergoryData = [
    {
        id: 1,
        image: images.category1,
    },
    {
        id: 2,
        image: images.category2,
    },
    {
        id: 3,
        image: images.category3,
    },
    {
        id: 4,
        image: images.category4,
    },
   
]

const CardCart=[
    {
        id:1,
        cartImg: images.category1,
        productName: 'Product Name',
        category:'Category',
        price: '$286.00',
    },
    {
        id:2,
        cartImg: images.category1,
        productName: 'Product Name',
        category:'Category',
        price: '$286.00',
    },
    {
        id:3,
        cartImg: images.category1,
        productName: 'Product Name',
        category:'Category',
        price: '$286.00',
    },
    {
        id:4,
        cartImg: images.category1,
        productName: 'Product Name',
        category:'Category',
        price: '$286.00',
    },
    {
        id:5,
        cartImg: images.category1,
        productName: 'Product Name',
        category:'Category',
        price: '$286.00',
    },
];



const SearchData = [
    {
        id: 1,
        historyIcon: icons.recentHistory,
        title: 'T-shirt',
        close: icons.close,
    },
    {
        id: 2,
        historyIcon: icons.recentHistory,
        title: 'Pants',
        close: icons.close,
    },
    {
        id: 3,
        historyIcon: icons.recentHistory,
        title: 'Dress',
        close: icons.close,
    },
]

const ProductData = [
    {
        id: 1,
        image: images.product1,
    },
    {
        id: 2,
        image: images.product1,
    },
    {
        id: 3,
        image: images.product1,
    },
    {
        id: 4,
        image: images.product1,
    },
    {
        id: 5,
        image: images.product1,
    },
]
const BuyProduct = [
    {
        id: 1,
       quantity:1,
       price:5,
    },
    {
        id: 2,
        quantity:10,
       price:4,
    },
    {
        id: 3,
        quantity:15,
        price:3,
    },
    {
        id: 4,
        quantity:20,
       price:2,
    },
    {
        id: 5,
        quantity:25,
        price:1,
    },
]

const ProductColor = [
    {
        id: 1,
        color:'#DB195F',
        colorName:'Pink',
    },
    {
        id: 2,
        color:'#FCD635',
        colorName:'Yellow',
    },
    {
        id: 3,
        color:'#57A608',
        colorName:'Green',
    },
    {
        id: 4,
        color:'#232323',
        colorName:'Black',
    },
    {
        id: 5,
        color:'#3C85D7',
        colorName:'Blue',
    },
    {
        id: 6,
        color:'#FF0C0C',
        colorName:'Red',
    },
]



const CategoryCart = [
    {
        id:1,
        cartImg: images.product1,
        productName: 'Product Name',
        price: '$286.00',
        Category: "Category",
    },
    {
        id:2,
        cartImg: images.product1,
        productName: 'Product Name',
        price: '$286.00',
        Category: "Category",
    },
    {
        id:3,
        cartImg: images.product1,
        productName: 'Product Name',
        price: '$286.00',
        Category: "Category",
    },
    {
        id:4,
        cartImg: images.product1,
        productName: 'Product Name',
        price: '$286.00',
        Category: "Category",
    },
  
];

const QuantityCart = [
    {
        id:1,
        cartImg: images.category1,
        productName: 'Product Name',
        price: '$286.00',
        Category: "Category",
    },
    {
        id:2,
        cartImg: images.category1,
        productName: 'Product Name',
        price: '$286.00',
        Category: "Category",
    },
    {
        id:3,
        cartImg: images.category1,
        productName: 'Product Name',
        price: '$286.00',
        Category: "Category",
    },
    {
        id:4,
        cartImg: images.category1,
        productName: 'Product Name',
        price: '$286.00',
        Category: "Category",
    },
  
];

const Questions = [
    {
        id:1,
        title: 'How do I login/create an account on Hippikart?',
        content:'What is your Returns/Exchange policy What is your Returns/Exchange policy What is your Returns/Exchange policy What is your Returns/Exchange policyWhat is your Returns/Exchange policy',
    },
    {
        id:2,
        title: 'Can I use a different number to login?',
        content:'What is your Returns/Exchange policy What is your Returns/Exchange policy What is your Returns/Exchange policy What is your Returns/Exchange policyWhat is your Returns/Exchange policy',
    },
    {
        id:3,
        title: 'I am unable to login even after entering the OTP?',
        content:'Our Return & Refund Policy template lets you get started with a Return and Refund Policy agreement. This template is free to download and use. According to TrueShip study, over 60% of customers review a Return/Refund  Policy before they make a purchasing decision.',
    },
    {
        id:4,
        title:'How do I add/edit/delete an address to my account?',
        content:'What is your Returns/Exchange policy What is your Returns/Exchange policy What is your Returns/Exchange policy What is your Returns/Exchange policyWhat is your Returns/Exchange policy',
    }
];

const HistoryCart = [
    {
        id:1,
        cartImg: images.product1,
        brandName:'Brand Name',
        price: '₹2490',
        productName: 'Product Name',
        quantity: 2,
        size: "XS",
        status:'Delivered',
    },
    {
        id:2,
        cartImg: images.product1,
        brandName:'Brand Name',
        price: '₹2490',
        productName: 'Product Name',
        quantity: 2,
        size: "XS",
        status:'In Transit',
    },
    {
        id:3,
        cartImg: images.product1,
        brandName:'Brand Name',
        price: '₹2490',
        productName: 'Product Name',
        quantity: 2,
        size: "XS",
        status:'Delivered',
    },
    {
        id:4,
        cartImg: images.product1,
        brandName:'Brand Name',
        price: '₹2490',
        productName: 'Product Name',
        quantity: 2,
        size: "XS",
        status:'Delivered',
    },
  
];



const PaymentMethod = [
    {
        id:1,
        method: 'Net Banking',
    },
    {
        id:2,
        method: 'Debit/Credit Card',
    },
    {
        id:3,
        method: 'Phonepe / Google pay/ BHIM',
    },
    {
        id:4,
        method: 'Paytm Wallet',
    },
];

const NotificationData = [
    {
        id:1,
        title: 'New collection alert',
        content:'New collection has been added',
    },
    {
        id:2,
        title: 'New collection alert',
        content:'New collection has been added',
    },
    
];

const CouponData = [
    {
        id:1,
        title: '20% OFF',
        content:'Get off on purchase of ₹2000',
    },
    {
        id:2,
        title: '20% OFF',
        content:'Get off on purchase of ₹2000',
    },
    {
        id:3,
        title: '20% OFF',
        content:'Get off on purchase of ₹2000',
    },
    {
        id:4,
        title: '20% OFF',
        content:'Get off on purchase of ₹2000',
    },
    {
        id:5,
        title: '20% OFF',
        content:'Get off on purchase of ₹2000',
    },
];

const AccountData = [
    {
        id:1,
        title: 'Edit Profile',
        icon: icons.Profile,
    },
    {
        id:2,
        title: 'My Coupons',
        icon: icons.Chart,
    },
   
    {
        id:3,
        title: 'Help & FAQ',
        icon: icons.Info,
    },
    {
        id:4,
        title: 'About Us',
        icon: icons.Lock,
    },
    {
        id:5,
        title: 'Logout',
        icon: icons.Logout,
    },
];

const ProductDetails = [
    {
        id:1,
        title: 'Technical Details',
        content:'What is your Returns/Exchange policy What is your Returns/Exchange policy What is your Returns/Exchange policy What is your Returns/Exchange policyWhat is your Returns/Exchange policy',
    },
    {
        id:2,
        title: 'Product Description',
        content:'What is your Returns/Exchange policy What is your Returns/Exchange policy What is your Returns/Exchange policy What is your Returns/Exchange policyWhat is your Returns/Exchange policy',
    },
    {
        id:3,
        title: 'Specification',
        content:'Our Return & Refund Policy template lets you get started with a Return and Refund Policy agreement. This template is free to download and use. According to TrueShip study, over 60% of customers review a Return/Refund  Policy before they make a purchasing decision.',
    },

];


export default {
    CatergoryData,
    CardCart,
    SearchData,
    ProductData,
    BuyProduct,
    CategoryCart,
    QuantityCart,
    Questions,
    HistoryCart,
    PaymentMethod,
    NotificationData,
    CouponData,
    AccountData,
    ProductColor,
    ProductDetails,
}