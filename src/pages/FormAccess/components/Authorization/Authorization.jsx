import { Button, Form, Input } from '../../../../components/exporter';

function Authorization() {
  return (
    <>
      <h1>Вход в акаунт</h1>
      <Form>
        <Input type={'text'} name={'email'} placeholder={'EMAIL'} />
        <Input type={'text'} name={'password'} placeholder={'ПАРОЛЬ'} />
        <Button>Подтвердить</Button>
      </Form>
    </>
  );
}

export { Authorization };
