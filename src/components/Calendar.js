import { TreeViewComponent } from '@syncfusion/ej2-react-navigations';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule'
import "./calendar.css"

const Calendar = () => {

  let scheduleObj : ScheduleComponent;
  const data: EventSettingsModel = [{
                Id: 1,
                Subject: 'Root Canal - Case Report',
                StartTime: new Date(2021, 10, 25, 0, 0),
                EndTime: new Date(2021, 10, 25, 1, 30)
            }, {
                Id: 2,
                Subject: 'Tom - Visit',
                StartTime: new Date(2021, 10, 25, 12, 0),
                EndTime: new Date(2021, 10, 25, 12, 30)
            }, {
                Id: 3,
                Subject: 'Shawn',
                StartTime: new Date(2021, 10, 26, 9, 30),
                EndTime: new Date(2021, 10, 26, 11, 0)
            }, {
                Id: 4,
                Subject: 'Jerry - Tooth Removal',
                StartTime: new Date(2021, 10, 23, 9, 0),
                EndTime: new Date(2021, 10, 23, 11,0)
            },
            {
                Id: 5,
                Subject: 'Patient 2',
                StartTime: new Date(2021, 10, 26, 0, 0),
                EndTime: new Date(2021, 10, 26, 1, 30)
            },
            {
              Id: 6,
              Subject: 'Patient 5',
              StartTime: new Date(2021, 10, 27, 0, 0),
              EndTime: new Date(2021, 10, 27, 1, 30)
          },
          {
            Id: 8,
            Subject: 'Patient 6',
            StartTime: new Date(2021, 10, 27, 2, 0),
            EndTime: new Date(2021, 10, 27, 3, 30)
        },
        ];

    const treeViewData = [{
      Id:1,
      Name:'Peter'
    },
    {
      Id:2,
      Name:'Allen'
    },
    {
      Id:3,
      Name:'Sam'
    },
    {
      Id:4,
      Name:'Mark'
    }
  ];

  const field = {
    dataSource: treeViewData,
    id:'Id',
    text:'Name'
  }

  let onTreeDragStop = (event) =>{
    
    let cellData = scheduleObj.getCellDetails(event.target);
    console.log(cellData);
    let eventData = {
      Subject : event.draggedNodeData.text,
      StartTime : cellData.startTime ,
      EndTime : cellData.endTime,
      IsAllDay : cellData.IsAllDay
    }

    console.log(eventData);
    scheduleObj.openEditor(eventData, "Add", true);
    // scheduleObj.addEvent(eventData);
  }

  return (
    <>
      <div className="cont">
        
        <div className="appoint-cont" >
          
          <div className="appoint-title-cont" >
            <h3>Calendar</h3>
          </div>

          <ScheduleComponent eventSettings={{dataSource:data}} selectedDate={new Date(2021, 10, 25 )} ref={ schedule => scheduleObj = schedule } >
            <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
          </ScheduleComponent>

        </div>

        <div className="list-cont" >
          <div className="list-title-cont" >
            <h3>Patient's List</h3>
          </div>

          <TreeViewComponent fields={field} allowDragAndDrop={true} nodeDragStop={onTreeDragStop} />

        </div>

      </div>
    </>
  )
}

export default Calendar
