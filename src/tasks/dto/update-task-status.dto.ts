import { IsEnum } from 'class-validator';
import { TaskStatus } from '../task-status.enum';

export class UpdateTaskStatusDto {
  @IsEnum(TaskStatus, {
    message: `Task status invalid. Must be one of these values: [${Object.keys(
      TaskStatus,
    )}]`,
  })
  status: TaskStatus;
}
