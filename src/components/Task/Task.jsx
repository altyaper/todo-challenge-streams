import { Paper, Checkbox, Grid } from '@mui/material';
import styled, { css } from 'styled-components';
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';

const TaskWrapper = styled(Paper)`
  border: 1px solid #E3E4E8;
  padding: 0.8em;
  border-radius: 15px;
  margin-bottom: 20px;

  .MuiSvgIcon-root {
    font-size: 2rem;
  }

  ${(props) => props.done && (
    css`
      background-color: #A362EA !important;
      color: white !important;

      .Mui-checked {
        color: white !important;
      }
    `
  )}
`;

const TaskText = styled.p`
  font-size: 1.2em;
  line-height: 1.6em;
  font-weight: 600;
  margin: 0;
  margin-bottom: 0.8em;
`;

const TaskDate = styled.span`
  font-weigth: 400;
`;

const DoneLabel = styled.span`
  font-weight: 600;
  text-transform: uppercase;
  transform: translateY(0px);
  color: ${({ done }) => !!done ? 'white' : 'black'};
  opacity: ${({ done }) => !!done ? '1' : '0'};
`;

export const Task = ({
  onMarkDone,
  task
}) => {
  const { t } = useTranslation();
  const formatedDate = dayjs(task.createdAt).format('DD MMM YYYY');

  return (
    <TaskWrapper done={task.done} variant="outlined">
      <Grid container spacing={2} >
        <Grid item xs={10} direction="row" alignItems="flex-end">
          <TaskText>{task.text}</TaskText>
        </Grid>
        <Grid item xs={2} style={{textAlign: 'right'}}>
          <Grid container justifyContent="flex-end">
            <Checkbox
              onChange={() => onMarkDone(task)}
              checked={task.done}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <TaskDate>{formatedDate}</TaskDate>
        </Grid>
        <Grid item xs={5}>
          <Grid container justifyContent="flex-end">
            <DoneLabel done={task.done}>{t('completed_task')}</DoneLabel>
          </Grid>
        </Grid>
      </Grid>
    </TaskWrapper>
  );
}

export default Task;