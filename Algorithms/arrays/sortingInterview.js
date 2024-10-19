// #1 - Sort 10 schools around your house by distance:

// Insertion Sort because it's a small input size, and in these cases this algorithm is very efficient, plus if the input is (or almost) sorted, it will be even faster.

// #2 - eBay sorts listings by the current Bid amount:

// Radix or Counting Sort because it's a number within a range, so we can take advantage of their fast execution with numbers, plus it's an integer value. Also, on eBay, the values won't be as large as a billion, they'll be smaller values.

// #3 - Sport scores on ESPN:

// Quick Sort because sometimes there are decimals and different formats for football, tennis, etc. It will be the most efficient, even though we worry about the worst case since the inputs can be different, it's important to consider the memory space we'll use.

// #4 - Massive database (can't fit all into memory) needs to sort through past year's user data:

// Merge Sort because we won't be sorting in memory due to the data being too large, and since the size is massive, we must prioritize time complexity.

// #5 - Almost sorted Udemy review data needs to update and add 2 new reviews:

// Insertion Sort because the data is almost sorted, and we're only adding 2 reviews.

// #6 - Temperature Records for the past 50 years in Canada:

// Radix or Counting Sort because there are no decimals, and they are usually 2-digit numbers, which allows us to make good use of these algorithms.

// #7 - Large user name database needs to be sorted. Data is very random:

// Merge Sort if we have enough memory, or Quick Sort if we don't worry about the worst case and can select a good pivot.

// #8 - You want to teach sorting for the first time:

// Bubble Sort, Selection Sort because they are the simplest.
