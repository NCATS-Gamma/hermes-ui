import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';
import DragHandleIcon from '@material-ui/icons/DragIndicator';

import StringInput from '../inputFields/StringInput';
import NumInput from '../inputFields/NumInput';
import BoolInput from '../inputFields/BoolInput';

const DragHandle = SortableHandle(({ disabled }) => <div className={`dragIcon${disabled ? ' disableDrag' : ''}`}><DragHandleIcon /></div>);

const SortableItem = SortableElement(({
  service, expanded, handleExpanded, remove, i, update,
}) => (
  <ListItem key={service.name}>
    <ExpansionPanel expanded={expanded === `${service.operationId}_${i}`} onChange={handleExpanded(`${service.operationId}_${i}`)} className="runnerItem">
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
      >
        <DragHandle disabled={expanded} />
        {service.name}
      </ExpansionPanelSummary>
      <ExpansionPanelDetails
        className="serviceItemDetails"
      >
        {service.description}
        {Object.keys(service.options).map((option) => {
          let inputField = (
            <StringInput
              key={option}
              label={option}
              update={update}
              index={i}
            />
          );
          switch (service.options[option].type) {
            case 'integer':
              inputField = (
                <NumInput
                  key={option}
                  label={option}
                  val={service.options[option].default}
                  update={update}
                  index={i}
                />
              );
              break;
            case 'boolean':
              inputField = (
                <BoolInput
                  key={option}
                  label={option}
                  update={update}
                  index={i}
                />
              );
              break;
            default:
              break;
          }
          return inputField;
        })}
        <IconButton
          onClick={remove}
          className="clearServiceButton"
        >
          <ClearIcon />
        </IconButton>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  </ListItem>
));

const SortableList = SortableContainer(({
  items, expanded, handleExpanded, services, setExpanded,
}) => (
  <List>
    {items.map((service, i) => (
      <SortableItem
        key={`${service.name}_${i}`}
        index={i}
        service={service}
        expanded={expanded}
        update={services.update}
        handleExpanded={handleExpanded}
        disabled={!!expanded}
        remove={() => { services.remove(i); setExpanded(false); }} // remove selected service and reset expanded
        i={i}
      />
    ))}
  </List>
));

export default SortableList;
