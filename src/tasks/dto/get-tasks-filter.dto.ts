import { IsEnum, IsOptional, IsString } from 'class-validator';
import { TaskStatus } from '../task-status.enum';

export class GetTasksFilterDto {
  @IsOptional()
  @IsEnum(TaskStatus, {
    message: `Task status invalid. Must be one of these values: [${Object.keys(
      TaskStatus,
    )}]`,
  })
  status?: TaskStatus;

  @IsOptional()
  @IsString()
  search?: string;
}
