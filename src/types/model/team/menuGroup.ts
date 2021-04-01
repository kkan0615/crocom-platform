import { SequelizeAttributes } from '@/types/sequelize'

export interface TeamMenuGroup extends SequelizeAttributes {
  teamId: number
  title: string
  type: TeamMenuGroupTypeEnum
  description: string
}

/**
 * text - only available chatting,
 * audio - chat + only mic
 * video - chat + mic + video
 */
export enum TeamMenuGroupTypeEnum {
  'text' = 'text',
  'audio' = 'audio',
  'video' = 'video',
}

export const keyOfTeamMenuGroupTypeEnum = Object.keys(TeamMenuGroupTypeEnum)
