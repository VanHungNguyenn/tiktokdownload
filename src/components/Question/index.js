import React from 'react'
import './Question.css'

import { Collapse } from 'antd'

const { Panel } = Collapse

const questions = [
	{
		ask: 'Tại sao bạn nên sử dụng Ytop1.com?',
		answer: 'Ytop1 là công cụ hỗ trợ tải video Youtube và nhạc Youtube MP3 trực tuyến bởi chúng hoạt động tốt trên cả PC, Android và iOS. Ytop1 không yêu cầu đăng nhập, cung cấp thông tin hoặc xuất hiện quảng cáo như những website khác ... Giao diện đơn giản, trực quan và dễ dàng sử dụng. Đó chính là lý do bạn nên sử dụng Ytop1.com',
	},
	{
		ask: 'Có phải cài đặt thêm phần mềm để tải video Youtube không?',
		answer: 'Câu trả lời ở đâu là KHÔNG. Bạn không phải cài đặt bất kỳ phần mềm và hệ thống cũng không yêu cầu khi bạn sử dụng Ytop1, công cụ hỗ trợ trực tuyến của chúng tôi hoàn toàn FREE. Chỉ cần đường truyền kết nối internet ổn định, cung cấp URL video Youtube bạn sẽ nhận được ngay liên kết tải video Youtube, MP3 Youtube chất lượng cao.',
	},
	{
		ask: 'Ytop1 hỗ trợ tải Youtube những định dạng nào?',
		answer: 'Chúng tôi hỗ trợ người dùng tải video Youtube tất cả các định dạng phổ biến và hiếm bao gồm MP4, AVI, MKV, WMV, MP3, DVD, 3GP, FLV, HD, ... hoàn toàn miễn phí, không có dùng thử hoặc giới hạn số lần sử dụng. Ytop1 được công nhận là công cụ hỗ trợ tải video từ Youtube số 1 hiện nay bởi hàng triệu người dùng yêu thích trên khắp Thế Giới.',
	},
	{
		ask: 'Ytop1 hỗ trợ sử dụng trên những nền tảng nào?',
		answer: 'Chúng tôi đã xây dựng Ytop1 cho cả Windows, macOS, Android, iOS và Ipad để bạn có thể sử dụng trên hệ điều hành yêu thích của mình. Không có bất kỳ hạn chế nào đối với nền tảng sử dụng Ytop1.',
	},
	{
		ask: 'Tôi có thể tải song song nhiều video Youtube, nhạc Youtube MP3 không?',
		answer: 'Ytop1 không giới hạn số lượt tải, dung lượng, độ dài và file tải trong cùng một thời điểm. Nghĩa là bạn có thể tải cùng lúc nhiều video Youtube. Tải Youtube video ở tốc độ cao nhất mà không có bất kỳ giới hạn nào.',
	},
	{
		ask: 'Ytop1 có lưu trữ dữ liệu video tải về từ Youtube hay không?',
		answer: 'Ytop1 tuyệt đối Không lưu trữ hoặc giữ bản sao của bất kỳ video bạn đã tải video từ Youtube, công cụ chỉ có nhiệm vụ tăng chất lượng file và cung cấp liên kết tải cho người dùng. Vì vậy, chúng tôi Không theo dõi lịch sử tải xuống của người dùng nên việc sử dụng Yop1 là hoàn toàn tuyệt mật, đảm bảo quyền riêng tư của mỗi người.',
	},
	{
		ask: 'Khi tải nhạc hoặc video từ Youtube bị lỗi, tôi có thể nhận hỗ trợ ở đâu?',
		answer: 'Trong quá trình tải Youtube, tải MP3 từ Youtube bạn cần hỗ trợ thêm, vui lòng liên hệ với chúng tôi qua địa chỉ Email info.ytop1@gmail.com để nhận sự hỗ trợ nhanh nhất chuyên viên chăm sóc khách hàng.',
	},
]

const Question = () => {
	return (
		<div className='question wrapper'>
			<div className='question__title'>
				Các câu hỏi thường gặp khi sử dụng Ytop1 tải video YouTube,
				Youtube to MP3
			</div>
			<div className='question__subtitle'>
				Những câu hỏi thường gặp khi sử dụng Ytop1 để tải Youtube video,
				nhạc MP3 từ Youtube
			</div>
			<div className='question__list'>
				<Collapse accordion>
					{questions.map((question, i) => {
						return (
							<Panel header={question.ask} key={i}>
								<p>{question.answer}</p>
							</Panel>
						)
					})}
				</Collapse>
			</div>
		</div>
	)
}

export default Question
