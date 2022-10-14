import React from 'react';
import { Container } from "@mui/material";
import styled from 'styled-components';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useTranslation } from "react-i18next";
import { Task } from "./Task";
import { Task as TaskModel } from '../../models';
import { TitleModal } from '../TaskDialog/TaskDialog';

ChartJS.register(ArcElement, Tooltip, Legend);

const TasksWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Empty = styled.div`
  text-align: center;
  color: #31343E;
  background-color: #E3E4E8;
  padding: 2em;
  font-size: 1.4em;
  border-radius: 15px;
  font-weight: bold;
`;

const ChartWrapper = styled.div`
  width: 5em;
`;

const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.2em;
  h2 {
    margin-right: auto;
  }
`;

interface TasksProps {
  tasks: TaskModel[],
  onMarkDone: (task: TaskModel) => void;
}

const Tasks = (props: TasksProps) => {
  const { tasks } = props;
  const { t } = useTranslation();
  const complete = tasks.filter(task => task.done === true).length;
  const incomplete = tasks.length - complete;

  const data = {
    datasets: [
      {
        data: [complete, incomplete],
        backgroundColor: ['#A362EA', '#F4A921'],
        borderColor: ['#A362EA', '#F4A921'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Container>
      <TopWrapper>
        <TitleModal>
          {t("tasks_title")}
        </TitleModal>
        <ChartWrapper>
          {tasks && tasks.length > 0 && <Doughnut data={data} />}
        </ChartWrapper>
      </TopWrapper>
      <TasksWrapper className="list">
        { tasks && tasks.map((task, idx) => (
          <Task key={idx} {...props} task={task} />
        ))}
        {!tasks.length && (
          <Empty>{t('empty_tasks')}</Empty>
        )}
      </TasksWrapper>
    </Container>
  )
}

export default Tasks;