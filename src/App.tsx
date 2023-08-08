import { useState } from 'react';
import { Row, Typography, Col, Image, Switch, Space } from 'antd';
import {
  title1,
  title2,
  title3,
  title4,
  title5,
  paragraph1,
  paragraph2,
  paragraph3,
  paragraph4,
  paragraph5,
  paragraph6,
  paragraph7,
  paragraph8,
  paragraph9,
  paragraph10,
  paragraph11,
  paragraph12,
  paragraph13,
  paragraph14,
  paragraph15,
  paragraph16,
  paragraph17,
  paragraph18,
  paragraph19,
  paragraph20,
  paragraph21,
  paragraph22,
  paragraph23,
  paragraph24,
  paragraph25,
  paragraph26,
  paragraph27,
} from "./language/language"

const { Title, Paragraph, Text } = Typography;


const App = () => {
  const [translate, setTranslate] = useState<boolean>(false)

  return (<Row>
    <Col sm={24}>
      <Title level={1}>{title1(translate)}</Title>
    </Col>
    <Col sm={6}>
      <Image width={"80%"} src='https://cdn.dribbble.com/users/505482/screenshots/1776789/nodejs-dribbble_1.gif' />
    </Col>
    <Col sm={18}>
      <Paragraph>
        {paragraph1(translate)}
      </Paragraph>
      <Paragraph>
        {paragraph2(translate)}
        <ul>
          <li>
            {paragraph3(translate)}
          </li>
          <li>
            {paragraph4(translate)}
          </li>
          <li>
            {paragraph5(translate)}
          </li>
          <li>
            {paragraph6(translate)}
          </li>
        </ul>
      </Paragraph>
    </Col>

    <Col sm={24}>
      <Title level={3}>{title2(translate)}</Title>
      <Paragraph>
        {paragraph7(translate)}
      </Paragraph>
      <Paragraph>
        <ol>
          <li>
            {paragraph8(translate)}
          </li>
          <li>
            {paragraph9(translate)}
          </li>
          <li>
            {paragraph10(translate)}
          </li>
        </ol>
      </Paragraph>
      <Paragraph>
        {paragraph11(translate)}
      </Paragraph>

      <Space direction='vertical' >
        <Text code>// Included the fs module to file</Text>
        <Text code>const fs = require("fs");</Text>
        <Text code>fs.open("test.txt" , "r+" , (err,fd) ={'>{'}</Text>
        <Text code>if(err){'{'}</Text>
        <Text code>console.log(err)</Text>
        <Text code>{'}'}</Text>
        <Text code>else{'{'}</Text>
        <Text code>console.log("File successfully opened") </Text>
        <Text code>{'}'}</Text>
        <Text code>{'})'}</Text>
      </Space>
      <Paragraph>
        <Paragraph strong >{paragraph12(translate)}</Paragraph>
        <ul>
          <li>
            <Text keyboard>r </Text><Text>Open for reading. An exception occurs if the file does not exist.</Text>
          </li>
          <li>
            <Text keyboard>r+ </Text><Text>Open for reading and writing. An exception occurs if the file does not exist.</Text>
          </li>
          <li>
            <Text keyboard>rs </Text><Text>Open for reading in synchronous mode, which instructs the operating system to bypass the system cache. This is mostly used for opening files on NFS mounts; it does not make open() a synchronous method.</Text>
          </li>
          <li>
            <Text keyboard>rs+ </Text><Text>Open for reading and writing in synchronous mode.</Text>
          </li>
          <li>
            <Text keyboard>w</Text><Text>Open for writing. If the file does not exist, it is created. If the file already exists, it is truncated.</Text>
          </li>
          <li>
            <Text keyboard>wx </Text><Text>Similar to the</Text><Text keyboard>w </Text><Text>flag, but the file is opened in exclusive mode. Exclusive mode ensures that the files are newly created.</Text>
          </li>
          <li>
            <Text keyboard>w+</Text><Text>Open for reading and writing. If the file does not exist, it is created. If the file already exists, it is truncated.</Text>
          </li>
          <li>
            <Text keyboard>wx </Text><Text>Similar to the</Text><Text keyboard>w+ </Text><Text>flag, but the file is opened in exclusive mode.</Text>
          </li>
          <li>
            <Text keyboard>a </Text><Text>Open for appending. If the file does not exist, it is created.</Text>
          </li>
          <li>
            <Text keyboard>ax</Text><Text>Similar to the</Text><Text keyboard>a </Text><Text>flag, but the file is opened in exclusive mode.</Text>
          </li>
          <li>
            <Text keyboard>a+ </Text><Text>Open for reading and appending. If the file does not exist, it is created.</Text>
          </li>
          <li>
            <Text keyboard>ax+</Text><Text>Similar to the</Text><Text keyboard>a+ </Text><Text>flag,but the file is opened in exclusive mode.</Text>
          </li>
        </ul>
      </Paragraph>
    </Col>

    <Col sm={24}>
      <Title level={3}>{title3(translate)}</Title>
      <Paragraph>
        {paragraph13(translate)}
      </Paragraph>
      <Paragraph>
        <ol>
          <li>
            {paragraph14(translate)}
          </li>
          <li>
            {paragraph15(translate)}
          </li>
          <li>
            {paragraph16(translate)}
          </li>
        </ol>
      </Paragraph>
      <Paragraph>
        {paragraph17(translate)}
      </Paragraph>

      <Space direction='vertical' >
        <Text code>// Included the fs module to file</Text>
        <Text code>const fs = require("fs");</Text>
        <Text code>// Data to be written into the file</Text>
        <Text code>const data = "My First Sentence";</Text>
        <Text code>fs.writeFile("myFirstText.txt" , data , (err) ={'>{'} </Text>
        <Text code>if(err){'{'}</Text>
        <Text code>console.log(err);</Text>
        <Text code>{'}'}</Text>
        <Text code>else{'{'}</Text>
        <Text code>console.log("Succesful operation!");</Text>
        <Text code>{'}'}</Text>
        <Text code>{'})'}</Text>
      </Space>
      <Paragraph  >{paragraph18(translate)}</Paragraph>

    </Col>

    <Col sm={24}>
      <Title level={3}>{title4(translate)}</Title>
      <Paragraph>
        {paragraph19(translate)}
      </Paragraph>
      <Paragraph>
        <ol>
          <li>
            {paragraph20(translate)}
          </li>
          <li>
            {paragraph21(translate)}
          </li>

        </ol>
      </Paragraph>
      <Paragraph>
        {paragraph22(translate)}
      </Paragraph>

      <Space direction='vertical' >
        <Text code>// Included the fs module to file</Text>
        <Text code>const fs = require("fs");</Text>
        <Text code>fs.readFile("fs_first_try.txt" , (err,data) ={'>{'} </Text>
        <Text code>if(err){'{'}</Text>
        <Text code>console.log(err);</Text>
        <Text code>{'}'}</Text>
        <Text code>else{'{'}</Text>
        <Text code>console.log(data.toString());</Text>
        <Text code>{'}'}</Text>
        <Text code>{'})'}</Text>
      </Space>
      <Paragraph  >{paragraph23(translate)}</Paragraph>
    </Col>


    <Col sm={24}>
      <Title level={3}>{title5(translate)}</Title>
      <Paragraph>
        {paragraph24(translate)}
      </Paragraph>
      <Paragraph>
        <ol>
          <li>
            {paragraph25(translate)}
          </li>
          <li>
            {paragraph26(translate)}
          </li>

        </ol>
      </Paragraph>
      <Paragraph>
        {paragraph27(translate)}
      </Paragraph>

      <Space direction='vertical' >
        <Text code>// Included the fs and path module to file</Text>
        <Text code>const fs = require("fs");</Text>
        <Text code>const path = require("path");</Text>
        <Text code>// We got the path of the file starting in the root directory </Text>
        <Text code>filePath = __dirname + path.sep + "myFile.txt";</Text>
        <Text code>fs.unlink(filePath, (err) ={'>{'}</Text>
        <Text code>if(err){'{'}</Text>
        <Text code>console.log(err);</Text>
        <Text code>{'}'}</Text>
        <Text code>else {'{'}</Text>
        <Text code>console.log("File deleting succesful");</Text>
        <Text code>{'}'}</Text>
        <Text code>{'})'}</Text>

      </Space>
    </Col>


  </Row>
  )
}


export default App;