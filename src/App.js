import "./styles.css";
import "antd/dist/antd.css";
import { Button, DatePicker, version, Typography, Select } from "antd";

export default function App() {
  const { Option } = Select;
  const { Title } = Typography;

  const children = [...Array(1000).keys()].map((idx) => (
    <Option key={idx.toString(36) + 1}>{idx.toString(36) + 1}</Option>
  ));

  const handleChange = (val) => console.log(`Selected ${val}`);

  return (
    <div className="App">
      <div className="calendar">
        <h1>Antd version: {version}</h1>
        <DatePicker />
        <Button type="primary" style={{ marginLeft: 8 }}>
          Primary Button
        </Button>
      </div>

      <div className="selector">
        <Title level={2}>{children.length} Items</Title>
        <Select
          mode="multiple"
          style={{ width: "100%" }}
          placeholder="Please select"
          defaultValue="a10"
          onChange={handleChange}
        >
          {children}
        </Select>
      </div>
    </div>
  );
}
