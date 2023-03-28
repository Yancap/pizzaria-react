import React from 'react'

export const useForm = () => {
  const __URL__ = "http://localhost:3001/email"
  const [ form, setForm ] = React.useState({
    name: '', email: '', message: ''
  })
  const [ loading, setLoading ] = React.useState(false)
  const [ error, setError ] = React.useState(null)
  const [ success, setSuccess ] = React.useState(false)

  async function handleSubmit(event){
    event.preventDefault()
    try{
      setLoading(true)
      setError(null)
      setSuccess(null)
      const response = await (await fetch(__URL__, {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
            },
          body: JSON.stringify(form)
      })).json()
      if (response.error) setError(response)
      else setSuccess(true)
      }
    catch(error){
      setError(true)
      console.error(error);
    } finally{
      setLoading(false)
    }
  }

  return {loading, error, setForm, form, handleSubmit, success}
  
}
