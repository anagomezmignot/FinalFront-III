
import  '@testing-library/jest-dom'
import {render, screen , fireEvent} from '@testing-library/react'
import Form from '../Components/Form';

beforeEach(() =>{
    render(<Form/>);
})


test('Verifica renderizado del form', () => {

    const inputName = screen.getByRole("input1");

    const inputEmail = screen.getByRole("input2");

    const btnSubmit= screen.getByRole("button"); 

    expect(inputName).toBeInTheDocument();
    expect(inputEmail).toBeInTheDocument();
    expect(btnSubmit).toBeInTheDocument();
})

test('Verifica que el nombre ingresado por parametro, es el mostrado en pantalla', async () => {

    const inputName =  screen.getByRole("input1");
    fireEvent.change(inputName, {target: {value: 'Victoria'}})

    const inputEmail = screen.getByRole("input2");
    fireEvent.change(inputEmail, {target: {value: 'ana@gamil.com'}})

    const btnSubmit= screen.getByRole("button"); 
    fireEvent.click(btnSubmit)

    const wordMeaning = await screen.findByText("Gracias Victoria, te contactaremos cuando antes vía mail");

    expect(wordMeaning).toBeInTheDocument();
})