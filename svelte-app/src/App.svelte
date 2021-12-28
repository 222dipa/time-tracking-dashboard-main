<script>
  let period = "weekly";
  let data = [
    {
      title: "Work",
      timeframes: {
        daily: {
          current: 5,
          previous: 7,
        },
        weekly: {
          current: 32,
          previous: 36,
        },
        monthly: {
          current: 103,
          previous: 128,
        },
      },
      bgcolor: "bg-lightredwork",
      icon: "assets/svg/icon-work.svg",
    },
    {
      title: "Exercise",
      timeframes: {
        daily: {
          current: 1,
          previous: 1,
        },
        weekly: {
          current: 4,
          previous: 5,
        },
        monthly: {
          current: 11,
          previous: 18,
        },
      },
      bgcolor: "bg-limegreen",
      icon: "assets/svg/icon-exercise.svg",
    },
    {
      title: "Play",
      timeframes: {
        daily: {
          current: 1,
          previous: 2,
        },
        weekly: {
          current: 10,
          previous: 8,
        },
        monthly: {
          current: 23,
          previous: 29,
        },
      },
      bgcolor: "bg-softblue",
      icon: "assets/svg/icon-play.svg",
    },
    {
      title: "Social",
      timeframes: {
        daily: {
          current: 1,
          previous: 3,
        },
        weekly: {
          current: 5,
          previous: 10,
        },
        monthly: {
          current: 21,
          previous: 23,
        },
      },
      bgcolor: "bg-violet",
      icon: "assets/svg/icon-social.svg",
    },
    {
      title: "Study",
      timeframes: {
        daily: {
          current: 0,
          previous: 1,
        },
        weekly: {
          current: 4,
          previous: 7,
        },
        monthly: {
          current: 13,
          previous: 19,
        },
      },
      bgcolor: "bg-lightredstudy",
      icon: "assets/svg/icon-study.svg",
    },

    {
      title: "Self Care",
      timeframes: {
        daily: {
          current: 0,
          previous: 1,
        },
        weekly: {
          current: 2,
          previous: 2,
        },
        monthly: {
          current: 7,
          previous: 11,
        },
      },
      bgcolor: "bg-softorange",
      icon: "assets/svg/icon-self-care.svg",
    },
  ];
  function setPeriod(value) {
    console.log(value);
    period = value;
  }
</script>

<div class="desktop:h-screen desktop:w-screen bg-verydarkblue items-center justify-center overflow-x-hidden">
  <div class="desktop:flex items-center justify-center align-middle min-h-[100%] px-6 py-20 overflow-x-hidden">
    <!-- profile cards -->
    <div class="mb-6 desktop:mb-0 desktop:w-[250px] desktop:mr-6 min-h-[524px] min-h-full bg-darkblue relative rounded-xl">
      <div class="flex desktop:inline-block desktop:min-h-[360px] bg-blue rounded-xl px-6 pt-8 text-white items-center">
        <img src="assets/images/image-jeremy.png" alt="jeremy" class="h-16 w-16 mb-8 border-2 border-white rounded-full"/>
        <div class="flex flex-col ml-4">
          <span class="desktop:leading-8 leading-1 text-paleblue">Report for</span>
          <span class="desktop:username username_responsive desktop:leading-10 leading-1">Jeremy Robson</span>
        </div>
      </div>
      <div class="flex desktop:flex-col justify-around desktop:min-h-[164px] max-h-max text-paleblue options mx-6 py-5">
        <p class="cursor-pointer hover:text-white duration-300 {period === 'daily' ? 'text-white' : ''}" on:click={() => setPeriod("daily")}>
          Daily
        </p>
        <p class="cursor-pointer hover:text-white duration-300 {period === 'weekly' ? 'text-white' : ''}" on:click={() => setPeriod("weekly")}>
          Weekly
        </p>
        <p class="cursor-pointer hover:text-white duration-300 {period === 'monthly' ? 'text-white' : ''}" on:click={() => setPeriod("monthly")}>
          Monthly
        </p>
      </div>
    </div>
    <!-- grid cards -->
    <div class="grid grid-rows-6 desktop:grid-rows-2 grid-flow-col gap-6 min-h-[524px] overflow-x-hidden">
      {#each data as item}
        <div class="h-[180px] desktop:h-[250px] w-full desktop:w-[250px] {item.bgcolor} rounded-xl relative overflow-hidden">
          <div class="absolute right-4 -top-1">
            <img src={item.icon} alt={item.icon} />
          </div>
          <div class="desktop:h-[200px] w-full bg-darkblue hover:bg-desaturatedblue duration-500 absolute bottom-0 rounded-t-xl text-white cursor-pointer">
            <div class="flex items-center mx-6 mt-6 font-medium justify-between">
              <p class="title">{item.title}</p>
              <img src="assets/svg/icon-ellipsis.svg" class="text-white cursor-pointer" alt={item.title}/>
            </div>
            <div
              class="flex flex-row items-center desktop:flex-col desktop:items-start mx-6 my-1 desktop:my-5 font-medium justify-between ">
              {#if period === 'daily'}
                <span class="desktop:time time_responsive">{item?.timeframes.daily.current}hrs</span>
                <span class="elapsed-time text-paleblue">Last Day - {item?.timeframes.daily?.previous}hrs</span>
              {/if}
              {#if period === 'weekly'}
                <span class="desktop:time time_responsive">{item?.timeframes.weekly.current}hrs</span>
                <span class="elapsed-time text-paleblue">Last Week - {item?.timeframes.weekly?.previous}hrs</span>
              {/if}
              {#if period === 'monthly'}
                <span class="desktop:time time_responsive">{item?.timeframes.monthly.current}hrs</span>
                <span class="elapsed-time text-paleblue">Last Mont - {item?.timeframes.monthly?.previous}hrs</span>
              {/if}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap");

  * {
    font-family: "Rubik", sans-serif;
  }

  .options {
    font-weight: 400;
  }

  .title {
    font-size: 18px;
    font-weight: 500;
  }

  .time {
    font-size: 50px;
    font-weight: 300;
  }

  .time_responsive{
    font-size: 40px;
    font-weight: 300;
  }

  .elapsed-time {
    font-weight: 400;
  }

  .username {
    font-size: 40px;
    line-height: 2.8rem;
    font-weight: 300;
  }

  .username_responsive {
    font-size: 30px;
    line-height: 2.8rem;
    font-weight: 300;
  }
</style>
