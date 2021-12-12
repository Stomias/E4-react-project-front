import React from 'react';
// import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import {
  Form,
  Input,
  Select,
  Button,
  InputNumber
} from 'antd';

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const Inscription = () => {
  const [form] = Form.useForm();

  const onFinish = async (register) => {
    console.log('Received values of form: ', register);
    //console.log(register.email);
    
    // Register new user
    const response = await fetch('http://localhost:3001/users/register', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({identifiant: register.email, motDePasse: register.confirm, nom: register.name, 
        prenom: register.surname, age: register.age, taille: register.height, sexe: register.sexe, poids: register.weight})
    });

    if (await response.status !== 201) {
      // You can do your error handling here
      const erreur = await response.json()
      console.log(erreur)
      window.alert(JSON.stringify(erreur.message));
    } else {
        // Call the .json() method on your response to get your JSON data
        console.log(await response.json());
    }
  };


    return (
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        scrollToFirstError
      >
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: 'email',
              message: "L'E-mail n'est pas valide !",
            },
            {
              required: true,
              message: 'Entrez votre E-mail!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: 'Entrez votre mot de passe!',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirmer Mot de passe"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Confirmez votre mot de passe!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }

                return Promise.reject(new Error('Les deux mot de passe entré sont différents!'));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          {...formItemLayout}
          name="name"
          label="Nom"
          rules={[
            {
              type: 'string',
              message: 'Nom invalide !',
            },
            {
              required: true,
              message: 'Entrez votre nom!',
            },
          ]}
        >
          <Input placeholder="Entrez votre nom!" />
        </Form.Item>

        <Form.Item
          {...formItemLayout}
          name="surname"
          label="Prénom"
          rules={[
            {
              type: 'string',
              message: 'Prénom invalide!',
            },
            {
              required: true,
              message: 'Entrez votre prénom!',
            },
          ]}
        >
          <Input placeholder="Entrez votre prénom" />
        </Form.Item>

        <Form.Item
          name="sexe"
          label="Sexe"
          rules={[
            {
              required: true,
              message: 'Sélectionnez votre sexe!',
            },
          ]}
        >
          <Select placeholder="Sélectionnez votre sexe">
            <Option value="male">Homme</Option>
            <Option value="female">Femme</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="age"
          label="Age"
          rules={[
            {
              type: 'number',
              message: 'La valeur saisie est invalide !',
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          name="weight"
          label="Poids"
          rules={[
            {
              type: 'number',
              message: 'La valeur saisie est invalide !',
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          name="height"
          label="Taille"
          rules={[
            {
              type: 'number',
              message: 'La valeur saisie est invalide !',
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    );
};

export default Inscription;