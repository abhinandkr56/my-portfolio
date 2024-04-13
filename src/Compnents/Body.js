import React from 'react'

const Body = () => {
    return (
        <div className='flex flex-col md:flex-col gap-28 my-10'>
            <div className='flex flex-row'>
                <div className='flex flex-col justify-center items-center md:w-full'>
                    <h4 className='font-bold text-2xl p-2'>WELCOME</h4>
                    <h1 className='text-6xl p-2'>I'm Abhinandhu K R</h1>
                    <h4 className='font-medium text-xl p-2'>Software Engineer</h4>
                    <button className='m-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out'>Download CV</button>
                </div>
                <div className='md:w-full'>
                    <img src='https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=1024x1024&w=is&k=20&c=fRiq_aLd5eX7bjr9Y0umM-b0kIxYDewARvO_9Ykqayc=' alt='image'
                    className='w-full'></img>
                </div>
            </div>
          
          <div className='flex flex-col md:flex-row gap-4 w-full my-6'>
           
          <div className="bg-grey-500 p-1 rounded-lg transform rotate-2">
               
                <div className='flex justify-center items-center bg-gray-500 h-auto'>
                  <div className="bg-grey-800 p-1 rounded-lg transform -rotate-6 m-3">
                      <img src="https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=1024x1024&w=is&k=20&c=fRiq_aLd5eX7bjr9Y0umM-b0kIxYDewARvO_9Ykqayc=" alt="Portrait" className="w-full h-auto rounded-lg shadow-xl transform -translate-y-2" />
                  </div>
                </div>
               
            </div>
            <div className='md:w-full flex flex-col p-4 justify-center align-middle'>
              <h2 className='text-5xl font-bold '>About</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
          </div>
        </div>
      )
}

export default Body