import { Button, Form, Input } from '../../../../components/exporter';

function Registration() {
  return (
    <>
      <h1>Создать аккаунт</h1>
      <Form>
        <Input type={'text'} name={'name'} placeholder={'ИМЯ'} />
        <Input type={'text'} name={'surname'} placeholder={'ФАМИЛИЯ'} />
        <Input type={'text'} name={'email'} placeholder={'EMAIL'} />
        <Input type={'text'} name={'password'} placeholder={'ПАРОЛЬ'} />
        <Button>Подтвердить</Button>
      </Form>
    </>
  );
}

export { Registration };
