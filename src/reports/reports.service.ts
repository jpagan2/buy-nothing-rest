import { Injectable, NotFoundException } from '@nestjs/common';
import { Report } from 'src/interfaces/report.interface';

@Injectable()
export class ReportsService {
    private readonly reports: Report[] = [];

    findAll(): Report[] {
        return this.reports
    }
    findOne(rid: number, c_by?, v_by?, start_date?, end_date?): Report {
        const report: Report = this.reports.find(report => report.rid === rid);
        if (!report) {
            throw new NotFoundException('Report Not Found');
        }

        return report;
    }

}
