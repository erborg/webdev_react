import React from 'react';
import {render} from 'react-dom';
import Container from "./Container";
import Input from "./Input";
import Button from "./Button";
import Link from "./Link";

function App() {
    return (
        <>
            <Container>
                <Input placeholder="Имя" name="name"/>
                <Button text="Отправить" type="submit" newClass="additional"/>
                <Link href="#" text="Ссылка"/>
            </Container>
        </>
    );
}

const root = document.querySelector("#root");

render(<App/>, root);
