import React, { useState, useEffect } from 'react';
import Field from './Field';
import TalentSection from './TalentSection';
import { Button, Form as BootstrapForm, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    clientName: '',
    poType: '',
    poNumber: '',
    receivedOn: new Date(),
    receivedFromName: '',
    receivedFromEmail: '',
    poStartDate: new Date(),
    poEndDate: new Date(),
    budget: '',
    currency: 'USD',
    jobTitle: '',
    talentDetails: []
  });

  const [showAdditionalREQ, setShowAdditionalREQ] = useState(false);
  const [valid, setValid] = useState(true);

  useEffect(() => {
    if (formData.poType === 'group') {
      setShowAdditionalREQ(true);
    } else {
      setShowAdditionalREQ(false);
    }
  }, [formData.poType]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleDateChange = (date, name) => {
    setFormData({
      ...formData,
      [name]: date
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation check
    const isValid = Object.values(formData).every(value => value);
    if (!isValid) {
      setValid(false);
      return;
    }
    setValid(true);
    console.log('Form Data:', formData);
  };

  const handleReset = () => {
    setFormData({
      clientName: '',
      poType: '',
      poNumber: '',
      receivedOn: new Date(),
      receivedFromName: '',
      receivedFromEmail: '',
      poStartDate: new Date(),
      poEndDate: new Date(),
      budget: '',
      currency: 'USD',
      jobTitle: '',
      talentDetails: []
    });
  };

  return (
    <BootstrapForm onSubmit={handleSubmit} className="p-4 border rounded bg-light">
      <Container>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="clientName">Client Name</Label>
              <Input
                type="select"
                name="clientName"
                id="clientName"
                value={formData.clientName}
                onChange={handleChange}
                required
              >
                <option value="">Select Client</option>
                <option value="client1">Client 1</option>
                <option value="client2">Client 2</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label for="poType">Purchase Order Type</Label>
              <Input
                type="select"
                name="poType"
                id="poType"
                value={formData.poType}
                onChange={handleChange}
                required
              >
                <option value="">Select PO Type</option>
                <option value="group">Group PO</option>
                <option value="individual">Individual PO</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label for="poNumber">Purchase Order No.</Label>
              <Input
                type="text"
                name="poNumber"
                id="poNumber"
                value={formData.poNumber}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label for="receivedOn">Received On</Label>
              <DatePicker
                selected={formData.receivedOn}
                onChange={(date) => handleDateChange(date, 'receivedOn')}
                className="form-control"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label for="receivedFromName">Received From - Name</Label>
              <Input
                type="text"
                name="receivedFromName"
                id="receivedFromName"
                value={formData.receivedFromName}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label for="receivedFromEmail">Received From - Email ID</Label>
              <Input
                type="email"
                name="receivedFromEmail"
                id="receivedFromEmail"
                value={formData.receivedFromEmail}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label for="poStartDate">PO Start Date</Label>
              <DatePicker
                selected={formData.poStartDate}
                onChange={(date) => handleDateChange(date, 'poStartDate')}
                className="form-control"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label for="poEndDate">PO End Date</Label>
              <DatePicker
                selected={formData.poEndDate}
                onChange={(date) => handleDateChange(date, 'poEndDate')}
                className="form-control"
                minDate={formData.poStartDate}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label for="budget">Budget</Label>
              <div className="d-flex align-items-center">
                <Input
                  type="number"
                  name="budget"
                  id="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  maxLength="5"
                  required
                />
                <Input
                  type="select"
                  name="currency"
                  id="currency"
                  value={formData.currency}
                  onChange={handleChange}
                  className="ml-2"
                >
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  {/* Add more currencies if needed */}
                </Input>
              </div>
            </FormGroup>

            {/* Talent Section */}
            <TalentSection jobTitle={formData.jobTitle} />

            <div className="d-flex justify-content-between mt-3">
              <Button color="primary" type="submit">Submit</Button>
              <Button color="secondary" type="button" onClick={handleReset}>Reset</Button>
            </div>

            {!valid && <p className="text-danger mt-3">Please fill out all required fields.</p>}
          </Col>
        </Row>
      </Container>
    </BootstrapForm>
  );
};

export default FormComponent;
