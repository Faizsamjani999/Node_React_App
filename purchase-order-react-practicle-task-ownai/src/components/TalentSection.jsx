import React, { useState, useEffect } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const TalentSection = ({ jobTitle }) => {
  const [talents, setTalents] = useState([]);
  const [selectedTalents, setSelectedTalents] = useState([]);

  useEffect(() => {
    if (jobTitle) {
      // Fetch talents based on jobTitle
      // For demo, using static data
      setTalents([
        { id: 'talent1', name: 'Talent 1' },
        { id: 'talent2', name: 'Talent 2' }
      ]);
    }
  }, [jobTitle]);

  const handleTalentChange = (id) => {
    setSelectedTalents(prevState => {
      if (prevState.includes(id)) {
        return prevState.filter(talentId => talentId !== id);
      } else {
        return [...prevState, id];
      }
    });
  };

  return (
    <div className="mt-4">
      <h4>Talent Details</h4>
      <FormGroup>
        <Label for="jobTitle">Job Title/REQ Name</Label>
        <Input
          type="select"
          name="jobTitle"
          id="jobTitle"
        >
          <option value="">Select Job Title</option>
          <option value="job1">Job 1</option>
          <option value="job2">Job 2</option>
        </Input>
      </FormGroup>

      {jobTitle && (
        <div>
          <h5>Talents for {jobTitle}</h5>
          {talents.map((talent) => (
            <FormGroup key={talent.id}>
              <Input
                type="checkbox"
                id={talent.id}
                checked={selectedTalents.includes(talent.id)}
                onChange={() => handleTalentChange(talent.id)}
              />
              <Label for={talent.id} className="ml-2">{talent.name}</Label>
            </FormGroup>
          ))}
        </div>
      )}
    </div>
  );
};

export default TalentSection;
