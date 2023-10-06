import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar'
import AddNews from './components/AddNews'
import AddAdmin from './components/Addadmin';
import Admindashboard from './components/Admindashboard';
import Newsdashboard from './components/Newsdashboard';
import Timetable from './components/Timetable';
import Home from './pages/homepage';
import LibraryHome from './components/Home';
import Header from './components/Header';
import Footer from './components/footer';
import UpdateNews from './components/UpdateNews';
import UpdateAdmin from './components/UpdateAdmin';

import AddBook from "./components/AddBook";
import Books from "./components/Book/Books";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Login from "./components/Login";
import BookDetails  from "./components/Book/BookDetails";

import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';
import SignIn from './components/signin.component';
import Landing from './components/LandingPage.component';
import ViewMarks from './components/ViewMarks';
import ViewSearchMarks from './components/ViewSearchMarks';

import ApplicantHome from "./pages/AppHome";
import ApplicantList from "./pages/List";
import SuccessPage from "./pages/Successpage";
import UpdateApp from "./pages/Updateapp";



const App = () => {
  return (
      
      <Router>
         <Header />
         <Navbar />
         <div className="min-h-screen">
      <Routes>

          <Route path="/addminDashboard" element={<Admindashboard/>} exact/>
          <Route path="/addAdmins" element={<AddAdmin/>} exact/>
          <Route path="/updateadmin/:id" element={<UpdateAdmin/>} exact/>
          <Route path="/Newsdashboard" element={<Newsdashboard/>} exact/>
          <Route path="/addNews" element={<AddNews/>} exact/>
          <Route path="/updatenews/:id" element={<UpdateNews/>} exact/>
          <Route path="/timetable" element={<Timetable/>} exact/>

          <Route path="/HomeBooks" element={<LibraryHome/>} exact/>   
          <Route path="/books" element={<Books />} />       
          <Route path="/boks" element={<Books/>} exact/>
          <Route path="/Services" element={<Services/>} exact/>
          <Route path="/Contact" element={<Contact/>} exact/>
          <Route path="/Login" element={<Login/>} exact/> 
          <Route path="/AddBook" element={<AddBook/>} exact/> 
          <Route path="/books/:id" element={<BookDetails/>} exact/> 

          <Route  path="/" component={<Home/>} exact/>
          <Route  path="/create" component={<Create/>} exact/>
          <Route  path="/edit/:id" component={<Edit/>} exact/>
          <Route  path="/index/:id" component={<Index/>} exact/>
          <Route  path="/signIn" component={<SignIn/>} exact/>
          <Route  path="/logout" component={<Landing/>} exact/>
          <Route  path="/viewmarks/:id" component={<ViewMarks/>} exact/>
          <Route  path="/searchmarks/:pathParam1?/:pathParam2?" component={<ViewSearchMarks/>}/>

          {/* <Route path="/applicanthome"exact element={<ApplicantHome />}/>
          <Route path="/applicants"exact element={<ApplicantList />} />
          <Route path="/SuccessPage" component={<SuccessPage/>} />
          <Route path="/applicant/:id" element={<UpdateApp />} /> */}
        </Routes>
        </div>
        <Footer />
        </Router>
  )
}

export default App


