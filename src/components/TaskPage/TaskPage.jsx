import { useState } from 'react';
import useSession from '../../hooks/sessionHook';
import Tasks from '../Task/Tasks';
import styled from 'styled-components';
import TaskDialog, { ColorButton, FooterWrapper } from '../TaskDialog/TaskDialog';

const MainFooterWrapper = styled(FooterWrapper)`
  padding: 1.2em;
`;

const PurpleButton = styled(ColorButton)`
  &.MuiButtonBase-root {
    background-color: #A362EA;
  }
`;

export const TaskPage = () => {

  const [tasks, onAdd, onDelete, onDone] = useSession();
  const [openDialog, setOpenDialog] = useState(false);
  
  const handleOnSubmit = ({ task }) => {
    onAdd(task);
  }
  
  const handleRemoveTask = idx => {
    onDelete(idx);
  }
  
  const handleMarkDone = idx => {
    onDone(idx);
  }


  const handleCloseModal = () => {
    setOpenDialog(false);
  }

  const handleOpenModal = () => {
    setOpenDialog(true);
  }

  return (
    <div>
      <Tasks
        onRemove={handleRemoveTask}
        onMarkDone={handleMarkDone}
        tasks={tasks}
      />
      <MainFooterWrapper>
        <PurpleButton
          size='large'
          disableElevation
          type="submit"
          onClick={handleOpenModal}
        >
          ADD NEW TASK
        </PurpleButton>
      </MainFooterWrapper>
      <TaskDialog
        onSubmit={handleOnSubmit}
        open={openDialog}
        onCloseModal={handleCloseModal}
      />
    </div>
  )
}

export default TaskPage;