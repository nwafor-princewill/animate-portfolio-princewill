import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();

    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = ({target: {name, value }}) => {
        setForm({...form, [name]: value})
    }

    //service_xdy10lm
    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            await emailjs.send('service_xdy10lm',
                'template_5lnw79v',
                {
                    from_name: form.name,
                    to_name: 'Princewill',
                    from_email: form.email,
                    to_email: 'nellyfancii@gmail.com',
                    message: form.message
                },
                    'aK1zUYFUGTxzm3tIH'
            )
            setLoading(false);
            alert('Your message has been sent!')

            setForm( {
                name: '',
                email: '',
                message: ''
            });

        } catch (error) {
            setLoading(false);

            console.log(error);
            //console.error("EmailJS Error:", error); // Log detailed error info
            alert('Something went wrong')
        }
       
    }
  return (
    <section className='c-space my-20'>
        <div className='relative min-h-screen flex items-center justify-center flex-col'>
            <img src="/assets/terminal.png" alt="terminal background" className='absolute inset-0 min-h-screen' />
            <div className='contact-container'>
                <h3 className='head-text mt-8 md:mt-0 lg:mt-10'>Let's talk</h3>
                <p className='text-lg text-white-600 mt-3 text-center md:text-left'>Whether you're looking to build a new website, improve your existing platform, or build a unique project to life, I'm here to help.</p>

                <form ref={formRef} onSubmit={handleSubmit} className='mt-8 flex flex-col space-y-7 md:space-y-7'>
                    <label className='space-y-3'>
                        <span className='field-label'>Full Name</span>
                        <input 
                        type="text"
                        name='name'
                        value={form.name}
                        onChange={handleChange}
                        required
                        className='field-input'
                        placeholder='John Doe'
                        />
                    </label>

                    <label className='space-y-3'>
                        <span className='field-label'>Email</span>
                        <input 
                        type="email"
                        name='email'
                        value={form.email}
                        onChange={handleChange}
                        required
                        className='field-input'
                        placeholder='Johndoe@gmail.com'
                        />
                    </label>

                    <label className='space-y-3'>
                        <span className='field-label'>Your message</span>
                        <textarea
                        
                        name='message'
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className='field-input'
                        placeholder="Hi, I'm interested in..."
                        />
                    </label>

                    {/* Submit Button */}
                    {/* <button type='submit' className='field-btn mt-6 md:mt-8'>
                            Send Message
                    </button> */}
                    <button className='field-btn' type='submit' disabled={loading}>
                        {loading ? 'Sending...' : 'Send Message'}

                        <img src="/assets/arrow-up.png" alt="arrow-up" className='field-btn_arrow' />

                    </button>
                </form>
            </div>
        </div>

        
    </section>
  )
}

export default Contact