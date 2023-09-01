import { Controller, Get } from '@nestjs/common'
import { ApiBearerAuth, ApiOperation, ApiSecurity, ApiTags } from '@nestjs/swagger'
import { HealthCheckService, HttpHealthIndicator, HealthCheck } from '@nestjs/terminus'

@ApiBearerAuth()
@ApiSecurity('basic')
@ApiTags('Health')
@Controller('health')
export class HealthController {
  constructor(private health: HealthCheckService, private http: HttpHealthIndicator) {}

  @ApiOperation({ summary: '건강체크' })
  @Get()
  @HealthCheck()
  check() {
    return this.health.check([() => this.http.pingCheck('nestjs-docs', 'https://docs.nestjs.com')])
  }
}
