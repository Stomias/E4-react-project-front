import React from 'react';
// import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import {
  Form,
  Input,
  Select,
  Checkbox,
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

    const onFinish = (values) => {
      console.log('Received values of form: ', values);
      console.log()
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

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject(new Error("Vous devez accepter les conditions générales d'utilisation")),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            {/* J'ai lu les <a href="">termes et conditions</a> */}
          </Checkbox>
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