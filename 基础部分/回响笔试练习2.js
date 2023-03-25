function runAsyncTasksWithLimit(taskCreatorList, limit) {
    return new Promise((resolve) => {
      const taskResults = [];
      let runningCount = 0;
      let nextIndex = 0;
  
      // 运行任务函数
      function runTask(index) {
        const taskCreator = taskCreatorList[index];
        const taskPromise = taskCreator();
        const taskIndex = index;
  
        // 将任务加入运行队列
        runningCount++;
        taskPromise.then((result) => {
          // 任务完成，将结果保存
          taskResults[taskIndex] = result;
          runningCount--;
  
          // 如果所有任务都完成，返回结果
          if (taskResults.length === taskCreatorList.length && runningCount === 0) {
            resolve(taskResults);
          } else {
            // 继续执行下一个任务
            tryRunNextTask();
          }
        });
      }
  
      // 尝试执行下一个任务
      function tryRunNextTask() {
        while (runningCount < limit && nextIndex < taskCreatorList.length) {
          runTask(nextIndex);
          nextIndex++;
        }
      }
  
      // 初始化运行
      tryRunNextTask();
    });
  }
  
  // 测试代码
  const taskCreatorList = [
    () => new Promise((resolve) => setTimeout(() => resolve('foo'), 500)),
    () => new Promise((resolve) => setTimeout(() => resolve('bar'), 1000)),
    () => new Promise((resolve) => setTimeout(() => resolve('hello world'), 1500)),
  ];
  
  runAsyncTasksWithLimit(taskCreatorList, 2).then((result) => {
    console.log(result);
  });