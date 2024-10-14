import useCalendar from '@lib/hooks/useCalendar';

import { ReactComponent as Failed } from '@assets/images/statistics/failed-big.svg';
import { ReactComponent as SuccessGroup } from '@assets/images/statistics/success-group-big.svg';

import { format } from 'date-fns';
import { twMerge } from 'tailwind-merge';

interface IGroupDetail {
  now: Date;
  cardId: number;
  className: string;
}
const SingleDetail = ({ now, cardId, className }: IGroupDetail) => {
  const calendar = useCalendar(now);
  const monthCalendar = calendar.getMonthCalendar();
  const week = ['월', '화', '수', '목', '금', '토', '일'];

  const successData: { [key: string]: number } =
    cardId === 1
      ? {
          '2024-10-01': 1,
          '2024-10-02': 0,
          '2024-10-03': 1,
        }
      : {
          '2024-10-01': 0,
          '2024-10-02': 1,
          '2024-10-03': 0,
        };

  return (
    <>
      {/* 월 ~ 일 뿌려주기*/}
      <div className="bg-white my-3 mx-4 rounded-2xl px-[21px] py-5">
        <section>
          <div className="flex mb-3">
            {week.map((day, index) => (
              <div key={index} className="flex-1 p-2 text-[11px]">
                {day}
              </div>
            ))}
          </div>
        </section>

        <section>
          {/* 최대 6주차로 뿌려주기 */}
          {Array.from({ length: 6 }).map((_, weekIndex) => (
            <div className="flex" key={weekIndex}>
              {monthCalendar
                .slice(weekIndex * 7, weekIndex * 7 + 7)
                .map((date, dayIndex) => {
                  const dateData = format(date, 'yyyy-MM-dd');
                  const nowMonth = date.getMonth() === now.getMonth();

                  return (
                    <div
                      key={`${weekIndex}-${dayIndex}`}
                      className={`flex-1 flex flex-col items-center justify-center ${!nowMonth ? 'invisible' : ''}`}
                    >
                      {nowMonth ? (
                        <>
                          <div
                            className={twMerge(
                              `text-gray-900 font-semibold`,
                              className,
                            )}
                          >
                            {date.getDate()}
                          </div>
                          <div className={twMerge(`pb-[18px]`, className)}>
                            {/* 일단 표시용 */}
                            {successData[dateData] === 1 ? (
                              <SuccessGroup />
                            ) : (
                              <Failed />
                            )}
                          </div>
                        </>
                      ) : (
                        ''
                      )}
                    </div>
                  );
                })}
            </div>
          ))}
        </section>
      </div>
    </>
  );
};
export default SingleDetail;
