import { Controller } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Conversation')
@Controller('conversation')
export class ConversationController {}