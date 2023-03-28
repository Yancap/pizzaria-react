import React from 'react'
import { Head } from '../Head'
import { ContainerImage, ContainerLabel, Form, Input, Label, Message, Submit, TextArea } from './Forms'
import pizza from './pizzaria-3.jpg'
import { useForm } from './useForm'

export const Contacts = () => {
  const {form, error, loading, handleSubmit, setForm, success} = useForm()
  function handleChange({target}) {
    setForm({...form, [target.id]: target.value})
  }
  return (
    <main>
        <Head title='Contatos' />
        <section className='container-fluid py-4 d-flex justify-content-between'>
            <Form className='col-7' onSubmit={handleSubmit}>
                <ContainerLabel>
                    <Label htmlFor='name' >Nome</Label>
                    <Input id='name' type='text' value={form.name} onChange={handleChange} placeholder='Seu Nome' required/>
                </ContainerLabel>
                <ContainerLabel>
                    <Label htmlFor='email' >Email</Label>
                    <Input id='email' type='email' value={form.email} onChange={handleChange} placeholder='email@email.com'required />
                </ContainerLabel>
                <ContainerLabel>
                    <Label htmlFor='message' >Mensagem</Label>
                    <TextArea id='message' type='text' value={form.message} onChange={handleChange} required/>
                    {success ? <Message>Enviado com Sucesso</Message> : (error ? <Message className='error'>{error}</Message>: null)}
                </ContainerLabel>
                {loading ? <Submit disabled>ENVIANDO</Submit> : <Submit>ENVIAR</Submit>}
                
            </Form>
            <ContainerImage />
        </section>
    </main>
  )
}
