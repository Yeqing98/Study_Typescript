// ts直接引用js文件会标红
// ts -> .d.ts翻译文件 -> js
import superagent from 'superagent';
import cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';

interface Course {
    title: string;
    [propName: string]: any
}

interface CourseResult {
    time: number;
    data: Course[]
}

interface Content {
    [propName: number]: Course[];
}

class Crowller {
    private secret = 'secretKey';
    private url = `http://www.dell-lee.com/typescript/demo.html?secret=${this.secret}`;
    private rwaHtml = '';
    private filePath = path.resolve(__dirname, '../data/course.json');

    constructor() {
        this.initSpiderProcess();
    }

    async getRawHtml() {
        const result = await superagent.get(this.url);
        return result.text;
    }

    getJsonInfo(html: string) {
        const $ = cheerio.load(html);
        const courseItem = $('.course-item');
        const courseInfo: Course[] = []
        courseItem.map((index, element) => {
            const descs = $(element).find('.course-desc');
            const title = descs.eq(0).text();
            const count = parseInt(descs.eq(1).text().split('：')[1], 10)

            courseInfo.push({
                title,
                count
            })
        });
        return {
            time: new Date().getTime(),
            data: courseInfo
        }
    }

    generateJsonContent(courseInfo: CourseResult) {
        let fileContent: Content = {};

        if (fs.existsSync(this.filePath)) {
            fileContent = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'))
        }
        fileContent[courseInfo.time] = courseInfo.data;
        return fileContent;
    }

    writeFile(content: string) {
        fs.writeFileSync(this.filePath, content);
    }

    async initSpiderProcess() {
        const html = await this.getRawHtml();
        const courseInfo = this.getJsonInfo(html);
        const fileContent = this.generateJsonContent(courseInfo);
        this.writeFile(JSON.stringify(fileContent));
    }
}

const crowller = new Crowller();