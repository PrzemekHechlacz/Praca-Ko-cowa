import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import pl from 'date-fns/locale/pl';
import "./CalendarTrening.scss"
import emailjs from 'emailjs-com';
import MenuNav from "../MenuNav/MenuNav"

const CalendarTrening = () => {
  const [dates, setDates] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [product, setProduct] = useState('');
  const [formSent, setFormSent] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(true);

  const handleDateChange = (date) => {
    const selectedDate = dates.find(d => d.toDateString() === date.toDateString());
    if (selectedDate) {
      setDates(dates.filter(d => d.toDateString() !== selectedDate.toDateString()));
    } else {
      setDates([...dates, date]);
     
    }
  };

  const handleSubmit = (e) => {
      e.preventDefault();
    
      emailjs.sendForm('service_qcks8wr', 'template_scg696m', e.target, 'VRkHMneHvVIMyNma9')
        .then((result) => {
          console.log(result.text)
          setName('');
          setEmail('');
          setPhone('');
          setProduct('');
          setDates([]);
          setIsFormVisible(false);
           setFormSent(true);
        }, (error) => {
          console.log(error.text);
        });
    };
    

const handleAnimationEnd = () => {
  
  setFormSent(false);
  setIsFormVisible(true);
};

  return (
    <>
    <MenuNav />
      <div className='app-calendar-trening'>
        <div className='calendar-container'>
        <p className='calendar-p1'>Formularz kontaktowy</p>
          <Calendar locale={pl} onChange={handleDateChange} value={dates} tileClassName={({date, view}) => (view === 'month' && dates.find(d => d.toDateString() === date.toDateString()) ? 'highlight' : null)} />
        </div>
        {isFormVisible && (
       <form className='form-calendar' onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='dates'>Wybrane daty:</label>
            <input
              type='text'
              id='dates'
              name='dates'
              value={dates.map(date => date.toLocaleDateString('pl-PL')).join(', ')}
              readOnly
            />
          </div>
          <div className='form-group'>
            <label htmlFor='name'>Imię:</label>
            <input
              type='text'
              id='name'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>E-mail:</label>
            <input
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='phone'>Telefon:</label>
            <input
              type='tel'
              id='phone'
              name='phone'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='product'>Wybierz rodzaj usługi:</label>
            <select className='select-calendar'
              id='product'
              name='product'
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              required
            >
              <option value=''>--Wybierz--</option>
              <option value='Szkolenia dronem'>Szkolenia latania dronem</option>
              <option value='Szkolenie teoretyczne z dronów'>Szkolenie teoretyczne z dronów</option>
           
            </select>
          </div>
          <button type='submit' className='submit-btn'>
            Wyślij
          </button>
        </form>
        )}
        {formSent &&  (<div className="sending_div" style={{position: 'fixed', top: 0, left: 0, height: '100vh', width: '100vw', zIndex: 9999, background: `url(https://cdn.dribbble.com/users/883586/screenshots/2335023/media/a9766036d474bd7f2727fdb102bdf2b5.gif) center / cover no-repeat`}} onAnimationEnd={handleAnimationEnd}></div>)}
      </div>
    </>
  )
}

export default CalendarTrening