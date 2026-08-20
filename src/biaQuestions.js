export const biaSubject = {
  "id": "intelligent-algorithms",
  "name": "الخوارزميات الذكية",
  "description": "أسئلة امتحانية في البرمجة الديناميكية والبحث النصي والتهشير والخوارزميات الجينية والأسراب - BIA601",
  "icon": "BIA"
}

export const biaQuizzes = [
  {
    "id": "bia-dynamic-programming",
    "subjectId": "intelligent-algorithms",
    "title": "البرمجة الديناميكية",
    "description": "مفاهيم البرمجة الديناميكية وLCS وخطوط الإنتاج والبائع الجوال.",
    "timeLimit": 30,
    "passingScore": 60,
    "questions": [
      {
        "id": "bia-dynamic-programming-q42",
        "text": "If an optimal solution can be created for a problem by constructing optimal solutions for its subproblems, the problem possesses ____________ property.",
        "answers": [
          "Overlapping subproblems",
          "Optimal substructure",
          "Memoization",
          "Greedy"
        ],
        "correctIndex": 1,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-dynamic-programming-q43",
        "text": "If a problem can be broken into subproblems which are reused several times, the problem possesses ____________ property.",
        "answers": [
          "Overlapping subproblems",
          "Optimal substructure",
          "Memoization",
          "Greedy"
        ],
        "correctIndex": 0,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-dynamic-programming-q44",
        "text": "If a problem can be solved by combining optimal solutions to non-overlapping problems, the strategy is called _____________.",
        "answers": [
          "Dynamic programming",
          "Greedy",
          "Divide and conquer",
          "Recursion"
        ],
        "correctIndex": 2,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-dynamic-programming-q45",
        "text": "Heuristic approaches are typically used to solve, more complex problems?",
        "answers": [
          "True",
          "False",
          "Sometimes",
          "No answer"
        ],
        "correctIndex": 0,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-dynamic-programming-q46",
        "text": "When dynamic programming is applied to a problem, it takes far less time as compared to other methods that don’t take advantage of overlapping subproblems.",
        "answers": [
          "True",
          "False"
        ],
        "correctIndex": 0,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-dynamic-programming-q47",
        "text": "A greedy algorithm can be used to solve all the dynamic programming problems.",
        "answers": [
          "True",
          "False",
          "Sometimes",
          "often"
        ],
        "correctIndex": 1,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-dynamic-programming-q48",
        "text": "In dynamic programming, the technique of storing the previously calculated values is called ___________.",
        "answers": [
          "Saving value property",
          "Storing value property",
          "Memoization",
          "Mapping"
        ],
        "correctIndex": 2,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-dynamic-programming-q49",
        "text": "When a top-down approach of dynamic programming is applied to a problem, it usually _____________.",
        "answers": [
          "Decreases both, the time complexity and the space complexity",
          "Decreases the time complexity and increases the space complexity",
          "Increases the time complexity and decreases the space complexity",
          "Increases both, the time complexity and the space complexity"
        ],
        "correctIndex": 1,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-dynamic-programming-q50",
        "text": "Which of the following is/are property/properties of a dynamic programming problem?",
        "answers": [
          "Optimal substructure",
          "Overlapping subproblems",
          "Greedy approach",
          "Both optimal substructure and overlapping subproblems"
        ],
        "correctIndex": 3,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-dynamic-programming-q51",
        "text": "Which of the following problems is NOT solved using dynamic programming?",
        "answers": [
          "0/1 knapsack problem",
          "Matrix chain multiplication problem",
          "Edit distance problem",
          "Fractional knapsack problem"
        ],
        "correctIndex": 3,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-dynamic-programming-q52",
        "text": "ما هو اختصار LCS .",
        "answers": [
          "Longest Common Substring",
          "Longest Common Subsequence",
          "Longest Continuous Sequence",
          "Longest Common Segment"
        ],
        "correctIndex": 1,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-dynamic-programming-q53",
        "text": "Which of the following problems should be solved using dynamic programming?",
        "answers": [
          "Mergesort",
          "Binary search",
          "Longest common subsequence",
          "Quicksort"
        ],
        "correctIndex": 2,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-dynamic-programming-q54",
        "text": "أي مما يلي ليس صحيح حول السلاسل المشتركة السلسلة 1 :ABC السلسلة2 :YZX",
        "answers": [
          "لا يوجد تسلسل مشترك",
          "طول السلسلة المشتركة0",
          "أطول طول سلسلة مشتركة هي السلسلة الفارغة",
          "LCS=YZX"
        ],
        "correctIndex": 3,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-dynamic-programming-q55",
        "text": "ما هو الهدف والفائدة من خوارزمية خطوط الإنتاج",
        "answers": [
          "تقليل التعقيد الزمني",
          "المرور على جميع المحطات بأقل وقت وأقل كلفة",
          "التقليل من عدد المحطات",
          "تقليل الوقت بكل محط ة"
        ],
        "correctIndex": 1,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-dynamic-programming-q56",
        "text": "ليكن لديناn محطة بمسألة البائع الجوال ما فائدة هذه الخوارزمية",
        "answers": [
          "تقليل الوقت",
          "زيادة الدقة بالتوصيل",
          "تقليل الوقت ويزيد التعقيد"
        ],
        "correctIndex": 0,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-dynamic-programming-q57",
        "text": "مسألة البائع هي إيجاد أقصر مسار(أقل تكلفة) ممكن يمر عبر مجموعة من المدن (النقاط) مرة واحدة فقط، ثم يعود إلى مدينة البداية.",
        "answers": [
          "صح",
          "خطأ"
        ],
        "correctIndex": 0,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      }
    ]
  },
  {
    "id": "bia-search-hashing",
    "subjectId": "intelligent-algorithms",
    "title": "البحث النصي والفرز والتهشير",
    "description": "القوة الغاشمة وHorspool والفرز بالعد وجداول التهشير.",
    "timeLimit": 50,
    "passingScore": 60,
    "questions": [
      {
        "id": "bia-search-hashing-q26",
        "text": "كيف تعمل القوة الغاشمة ( Brute force )؟",
        "answers": [
          "تحسين المساحة",
          "تقليل المساحة",
          "تجربة كافة الحلول",
          "جميع ما سبق خاطئ"
        ],
        "correctIndex": 2,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-search-hashing-q28",
        "text": "ما هي الوظيفة الأساسية لجدول الإزاحة Shift Table) في خوارزمية Horspool للبحث عن النصوص؟",
        "answers": [
          "تحديد عدد المرات التي تكرر فيها كل حرف في النص الأصلي.",
          "تحديد المسافة اللازمة للإزاحة في حال حدوث تطابق كامل.",
          "تأكيد العثور على النمط بمجرد حدوث تطابق جزئي لتقليل عدد المقارنات.",
          "تحديد مقدار القفزة (عدد الخطوات) التي يجب أن يتحركها \"النمط Pattern) عند حدوث عدم تطابق."
        ],
        "correctIndex": 3,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-search-hashing-q30",
        "text": "من أساسيات الفرز بالعد",
        "answers": [
          "فرز العناصر فقط",
          "استخدام جدول مساعد لحساب التكرارات",
          "خوارزمية فرز خطي",
          "جميع ما سبق"
        ],
        "correctIndex": 3,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-search-hashing-q31",
        "text": "ما هي الفائدة الأساسية من استخدام خوارزمية الفرز بالعد (Counting Sort :)",
        "answers": [
          "فرز البيانات دون استخدام أي ذاكرة إضافية",
          "تحقيقالتعقيد خطي 𝑶(𝒏 + 𝒌)≅ 𝑶(𝒏)",
          "فرز البيانات مهما كان نطاق القيم كبيرًا جدًا",
          "فرز البيانات بناءً على المقارنات بين العناصر فقط"
        ],
        "correctIndex": 1,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-search-hashing-q32",
        "text": "المصفوفة المساعدة بخوارزمية الفرز بالعد تدعى",
        "answers": [
          "مصفوفة الترتيبOrdering Array )",
          "مصفوفة العد/العداداتCount Array )",
          "مصفوفة الفرزSorting Array )",
          "مصفوفة النهائيةOutput Array)"
        ],
        "correctIndex": 1,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-search-hashing-q33",
        "text": "How many comparisons will be made to sort the array arr={1,5,3,8,2} using counting sort?",
        "answers": [
          "5",
          "7",
          "9",
          "0"
        ],
        "correctIndex": 3,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-search-hashing-q34",
        "text": "Which of the following sorting techniques is most efficient if the range of input data is not significantly greater than a number of elements to be sorted?",
        "answers": [
          "selection sort",
          "bubble sort",
          "counting sort",
          "insertion sort"
        ],
        "correctIndex": 2,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-search-hashing-q35",
        "text": "What is the auxiliary space requirement of counting sort?",
        "answers": [
          "O(1)",
          "O(n)",
          "O(log n)",
          "O(n+k) k=range of input"
        ],
        "correctIndex": 3,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-search-hashing-q36",
        "text": "It is not possible to implement counting sort when any of the input element has negative value.",
        "answers": [
          "True",
          "False"
        ],
        "correctIndex": 1,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-search-hashing-q37",
        "text": "Which of the following sorting techniques is stable?",
        "answers": [
          "quick sort",
          "counting sort",
          "heap sort",
          "selection sort"
        ],
        "correctIndex": 1,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-search-hashing-q38",
        "text": "Which of the following uses the largest amount of auxiliary space for sorting?",
        "answers": [
          "Bubble sort",
          "Counting sort",
          "Quick sort",
          "Heap sort"
        ],
        "correctIndex": 1,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-search-hashing-q39",
        "text": "What is the average time complexity of counting sort?",
        "answers": [
          "O(n)",
          "O(n+k) k=range of input",
          "O(n2)",
          "O(n log n)"
        ],
        "correctIndex": 1,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-search-hashing-q40",
        "text": "What is the disadvantage of counting sort?",
        "answers": [
          "counting sort has large time complexity",
          "counting sort has large space complexity",
          "counting sort is not a comparison based sorting technique",
          "counting sort cannot be used for array with non integer elements"
        ],
        "correctIndex": 3,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-search-hashing-q41",
        "text": "The complexity of which of the following sorting algorithms remains to be the same in its best, average and worst case?",
        "answers": [
          "quick sort",
          "insertion sort",
          "counting sort",
          "gnome sort"
        ],
        "correctIndex": 2,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-search-hashing-q42",
        "text": "Which of the following statement is true about comparison based sorting?",
        "answers": [
          "counting sort is a comparison based sort",
          "any comparison based sorting can be made stable",
          "bubble sort is not a comparison based sort",
          "any comparison based sort requires at least O(n2) time"
        ],
        "correctIndex": 1,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-search-hashing-q43",
        "text": "Counting sort is often used as a sub routine for radix sort.",
        "answers": [
          "True",
          "False"
        ],
        "correctIndex": 0,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-search-hashing-q44",
        "text": "What is the advantage of counting sort over quick sort?",
        "answers": [
          "counting sort has lesser time complexity when range is comparable to number of input elements",
          "counting sort has lesser space complexity",
          "counting sort is not a comparison based sorting technique",
          "it has no advantage"
        ],
        "correctIndex": 0,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-search-hashing-q45",
        "text": "Which of the following algorithm takes non linear time for sorting?",
        "answers": [
          "counting sort",
          "quick sort",
          "bucket sort",
          "radix sort"
        ],
        "correctIndex": 1,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-search-hashing-q46",
        "text": "ما هو الهدف والفائدة من التهشير Hash Table :",
        "answers": [
          "ضمان تخزين البيانات في مواقع متتالية بالذاكرة.",
          "إتاحة الوصول السريع والمباشر للعناصر باستخدام مفاتيح فريدة.",
          "ضغط حجم البيانات لتقليل المساحة المستهلكة.",
          "ضمان عدم حدوث أي تصادمات Collisions) نهائياً عند تخزين البيانات ."
        ],
        "correctIndex": 1,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-search-hashing-q47",
        "text": "أي مما يلي ليس فائدة للتهشير.",
        "answers": [
          "يضمن أن العناصر في المصفوفة مرتبة",
          "يزداد التعقيد الزمني",
          "يبقى التعقيد الزمن ثابت",
          "تصبح المصفوفة غير قابلة للاستخدام"
        ],
        "correctIndex": 0,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-search-hashing-q48",
        "text": "أحد الطرق المستخدمة في حل التصادمات فيHash table هي طريقة العنونة المفتوحةAddressing Open .",
        "answers": [
          "صح",
          "خطأ"
        ],
        "correctIndex": 0,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-search-hashing-q49",
        "text": "مبدأ عمل العنونة المفتوحةopen addressing :)عند حدوث تصادم (أي أن الموقع مشغول)، تقوم العنونة المفتوحة ببدء عملية \" تسلسل التحقيق Probing Sequence) للبحث عن أول خانة فارغة تالية وفق طرق محددة.",
        "answers": [
          "صح",
          "خطأ"
        ],
        "correctIndex": 0,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-search-hashing-q50",
        "text": "ما هي فائدة العنونة المفتوحة Open addressing ؟",
        "answers": [
          "تقليل التعقيد الزمني",
          "إيجاد مفاتيح لتخزين القيم بوقت أسرع",
          "يسمح بتخزين قيمتين بنفس الموقع",
          "جميع الإجابات خاطئة"
        ],
        "correctIndex": 3,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-search-hashing-q51",
        "text": "ما هو الاسم العلمي للعملية التي تحدث عند محاولة تخزين عنصرين في نفس الاندكس داخل جدول التهشير؟",
        "answers": [
          "Hashing Error",
          "Data Redundancy",
          "Collision",
          "Index Overlap"
        ],
        "correctIndex": 2,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-search-hashing-q52",
        "text": "أي من الجمل التالية تصف مفهوم \"التصادمCollision) في جداول التهشير بشكل صحيح؟",
        "answers": [
          "استبدال القيمة القديمة بالقيمة الجديدة وحذف البيانات السابقة عند تشابه المفاتيح.",
          "الحالة التي تحدث عندما تحاول دالة التهشير تعيين مفتاحين مختلفين Keys) إلى نفس الفهرس Index) في المصفوفة.",
          "عملية توسيع حجم المصفوفة تلقائياً إلى الضعف عند امتلاء الجدول .",
          "توقف الخوارزمية عن العمل نتيجة وجود خطأ في مدخلات دالة التهشير."
        ],
        "correctIndex": 1,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-search-hashing-q53",
        "text": "ماذا ينتج عن استخدام دالة حل التصادمات في التهشير؟",
        "answers": [
          "منع حدوث التصادمات نهائياً .",
          "زيادة سرعة دالة الهاش الأساسية.",
          "تقليل حجم جدول الهاش.",
          "إيجاد مواقع بديلة لتخزين القيم عند حدوث تصادم."
        ],
        "correctIndex": 3,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-search-hashing-q54",
        "text": "السبر الخطي متى يبدأLinear probing)؟",
        "answers": [
          "مع الخانة التي تكون بها التصادمات",
          "مع الخانة التالية للتصادمات"
        ],
        "correctIndex": 0,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-search-hashing-q55",
        "text": "عند انشاء قائمة مرتبطة لمعالجة التصادمات، ما الزمن اللازم للبحث عن عنصر في جدول التهشير؟",
        "answers": [
          "يزداد التعقيد الزمني",
          "يبقى التعقيد الزمني ثابت",
          "تصبح المصفوفة غير قابلة للاستخدام"
        ],
        "correctIndex": 0,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-search-hashing-q56",
        "text": "لدينا المعادلة التالية في مسألة التهشير المضاعف لحل التصادمات: (𝒉𝟏(𝒌)+ 𝒊 × 𝒉𝟐(𝒌)) 𝒎𝒐𝒅 𝒎 إذا كان لدينا قيمة معينة لـk وi فإن المعادلة لا تقوم بحل التصادم",
        "answers": [
          "صح",
          "خطأ"
        ],
        "correctIndex": 1,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-search-hashing-q57",
        "text": "What is hash function?",
        "answers": [
          "A function has allocated memory to keys",
          "A function that computes the location of the key in the array",
          "A function that creates an array",
          "A function that computes the location of the values in the array"
        ],
        "correctIndex": 1,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-search-hashing-q58",
        "text": "What is hash table?",
        "answers": [
          "A structure that maps values to keys",
          "A structure that maps keys to values",
          "A structure used for storage",
          "A structure used to implement stack and queue"
        ],
        "correctIndex": 1,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-search-hashing-q59",
        "text": "If several elements are competing for the same bucket in the hash table, what is it called?",
        "answers": [
          "Diffusion",
          "Replication",
          "Collision",
          "Duplication"
        ],
        "correctIndex": 2,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-search-hashing-q60",
        "text": "What is direct addressing?",
        "answers": [
          "Distinct array position for every possible key",
          "Fewer array positions than keys",
          "Fewer keys than array positions",
          "Same array position for all keys"
        ],
        "correctIndex": 0,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-search-hashing-q61",
        "text": "What is the search complexity in direct addressing?",
        "answers": [
          "O(n)",
          "O(logn)",
          "O(nlogn)",
          "O(1)"
        ],
        "correctIndex": 3,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-search-hashing-q62",
        "text": "Which of the following is not a technique to avoid a collision?",
        "answers": [
          "Make the hash function appear random",
          "Use the chaining method",
          "Use uniform hashing",
          "Increasing hash table size"
        ],
        "correctIndex": 3,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-search-hashing-q63",
        "text": "Double hashing is one of the best methods available for open addressing.",
        "answers": [
          "True",
          "False"
        ],
        "correctIndex": 0,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-search-hashing-q64",
        "text": "What is the load factor?",
        "answers": [
          "Average array size",
          "Average key size",
          "Average chain length",
          "Average hash table length"
        ],
        "correctIndex": 2,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-search-hashing-q65",
        "text": "What is simple uniform hashing?",
        "answers": [
          "Every element has equal probability of hashing into any of the slots",
          "A weighted probabilistic method is used to hash elements into the slots",
          "Elements has Random probability of hashing into array slots",
          "Elements are hashed based on priority"
        ],
        "correctIndex": 0,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-search-hashing-q66",
        "text": "In simple uniform hashing, what is the search complexity?",
        "answers": [
          "O(n)",
          "O(logn)",
          "O(nlogn)",
          "O(1)"
        ],
        "correctIndex": 3,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-search-hashing-q67",
        "text": "In simple chaining, what data structure is appropriate?",
        "answers": [
          "Singly linked list",
          "Doubly linked list",
          "Circular link list",
          "Binary trees"
        ],
        "correctIndex": 1,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      }
    ]
  },
  {
    "id": "bia-genetic-algorithms",
    "subjectId": "intelligent-algorithms",
    "title": "الخوارزميات الجينية",
    "description": "الانتخاب والتصالب والطفرة وتابع الملاءمة في الخوارزميات الجينية.",
    "timeLimit": 40,
    "passingScore": 60,
    "questions": [
      {
        "id": "bia-genetic-algorithms-q35",
        "text": "في الخوارزميات الجينية ، البقاء دائماً للأصلح",
        "answers": [
          "صح",
          "خطأ"
        ],
        "correctIndex": 1,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-genetic-algorithms-q36",
        "text": "الخوارزمية الجينية تعتمد على مبدأ البقاء للأصلح.",
        "answers": [
          "صح",
          "خطأ"
        ],
        "correctIndex": 0,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-genetic-algorithms-q37",
        "text": "في الخوارزميات الجينية يتم دائماً اختيار الأفراد الأضعف لإنتاج الأجيال القادمة .",
        "answers": [
          "صح",
          "خطأ"
        ],
        "correctIndex": 1,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-genetic-algorithms-q38",
        "text": "في الخوارزميات الجينية ، يتم دائماً اختيار الأفراد الأقوى لإنتاج الأجيال القادمة",
        "answers": [
          "صح",
          "خطأ"
        ],
        "correctIndex": 1,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-genetic-algorithms-q39",
        "text": "في الخوارزمية الجينية، يكون لأفراد الجيل الجديد في الخوارزميات الجينية قيم ملائمة:",
        "answers": [
          "أفضل من قيم الملاءمة لأفراد الجيل السابق",
          "أسوء من قيم الملاءمة لأفراد الجيل السابق",
          "أفضل أو أسوء من قيم الملاءمة لأفراد الجيل السابق"
        ],
        "correctIndex": 2,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-genetic-algorithms-q40",
        "text": "في الخوارزمية الجينية، يكون لأفراد الجيل الجديد في الخوارزميات الجينية قيم ملائمة:",
        "answers": [
          "أسوء",
          "أفضل",
          "أسوء و أفضل",
          "أسوء أو أفضل"
        ],
        "correctIndex": 3,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-genetic-algorithms-q41",
        "text": "في الخوارزميات الجينية يؤدي التصالب بين حلين جيدين في الخوارزميات الجينية إلى:",
        "answers": [
          "حل أفضل",
          "حل أسوء",
          "أفضل أو أسوء",
          "أفضل و أسوء"
        ],
        "correctIndex": 2,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-genetic-algorithms-q42",
        "text": "الخوارزميات الجينية تضمن حل أمثلي",
        "answers": [
          "صح",
          "دائماً",
          "أحياناً",
          "خطأ"
        ],
        "correctIndex": 3,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-genetic-algorithms-q43",
        "text": "الخوارزميات الجينية لا تضمن حل أمثلي",
        "answers": [
          "صح",
          "دائماً",
          "أحياناً",
          "خطأ"
        ],
        "correctIndex": 0,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-genetic-algorithms-q44",
        "text": "استخدام معدل طفرة عالي جداً يمكن أن يؤدي إلى فقدان الحلول المثلى بسبب التحول العشوائي الزائد",
        "answers": [
          "صح",
          "خطأ"
        ],
        "correctIndex": 0,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-genetic-algorithms-q45",
        "text": "في الخوارزميات الجينية، الطفرة قد تؤدي إلى حلول أسوء",
        "answers": [
          "صح",
          "خطأ"
        ],
        "correctIndex": 0,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-genetic-algorithms-q46",
        "text": "يقوم دولاب الحظ بالخوارزميات الجينية",
        "answers": [
          "اختيار الحلول الأفضل باحتمال أكبر",
          "منع اختيار الحلول الأسوء",
          "منع تكرار اختيار الحلول",
          "منع تكرار نفس الحل"
        ],
        "correctIndex": 0,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-genetic-algorithms-q47",
        "text": "يقوم دولاب الحظ بالخوارزميات الجينية",
        "answers": [
          "منع اختيار الحلول الأسوء باحتمال أكبر",
          "اختيار الحلول الأفضل باحتمال أصغر",
          "منع تكرار نفس الحل",
          "منع تكرار اختيار الحلول"
        ],
        "correctIndex": 0,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-genetic-algorithms-q48",
        "text": "الخوارزميات الجينية، يكون احتمال اختيار الحل الجيد:",
        "answers": [
          "أكبر",
          "أصغر",
          "متساوي"
        ],
        "correctIndex": 0,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-genetic-algorithms-q49",
        "text": "في الخوارزميات الجينية ، يمكن ضمان الوصول إلى الحل الأمثل دوماً باستخدام التصالب فقط دون استخدام الطفرة.",
        "answers": [
          "صح",
          "خطأ"
        ],
        "correctIndex": 1,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-genetic-algorithms-q50",
        "text": "ليست من العمليات الأساسية في الخوارزمية الجينية ( GA) هي",
        "answers": [
          "الاختيار العشوائي Selection)",
          "التصالبCrossover",
          "الطفرةMutation",
          "ترتيب عاملالملاءمة تصاعدياً"
        ],
        "correctIndex": 3,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-genetic-algorithms-q51",
        "text": "الخوارزمية الجينية لا تعتمد على طول الكروموسوم",
        "answers": [
          "صح",
          "خطأ"
        ],
        "correctIndex": 1,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-genetic-algorithms-q52",
        "text": "الخوارزمية الجينية ليست عملية تسلسلية فهي لا تعطينا الحل المثالي",
        "answers": [
          "صح",
          "خطأ"
        ],
        "correctIndex": 1,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-genetic-algorithms-q54",
        "text": "من أنواع التصالب1-point crossover وn-point crossover .",
        "answers": [
          "صح",
          "خطأ"
        ],
        "correctIndex": 0,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-genetic-algorithms-q55",
        "text": "احتمال حدوث التصالب يكون عادةً بين 0.6 إلى0.9 .",
        "answers": [
          "صح",
          "خطأ"
        ],
        "correctIndex": 0,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-genetic-algorithms-q56",
        "text": "ماهو عمل تابع الملاءمة Fitness Function) ) في الخوارزميات الجينية؟",
        "answers": [
          "توليد أفراد جدد عشوائيًا",
          "قياس مدى جودة الحل واقترابه من الحل الأمثل",
          "تنفيذ عملية التصالب بين الأفراد",
          "تعديل الجينات بشكل عشوائي"
        ],
        "correctIndex": 1,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-genetic-algorithms-q57",
        "text": "أي من العبارات التالية صحيحة بخصوص معدل الطفرة في الخوارزميات الجينية؟",
        "answers": [
          "استخدام معدل طفرة عالٍ جدًا يساعد دائمًا على الوصول للحل الأمثل",
          "استخدام معدل طفرة عالٍ جدًا قد يؤدي إلى فقدان الحلول المثلى بسبب التغير العشوائي الزائد",
          "معدل الطفرة لا يؤثر على جودة الحلول",
          "كلما زاد معدل الطفرة كان أداء الخوارزمية أفضل دائمًا"
        ],
        "correctIndex": 1,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-genetic-algorithms-q58",
        "text": "أي من العبارات التالية صحيحة بخصوص اختيار الأفراد في الخوارزميات الجينية؟",
        "answers": [
          "يتم دائمًا اختيار الأفراد الأضعف لإنتاج الأجيال القادمة",
          "لا تؤثر عملية الاختيار على الجيل القادم",
          "يتم اختيار جميع الأفراد بنفس الاحتمال دائمًا",
          "يتم اختيار الأفراد الأفضل غالبًا باحتمال أكبر للمساهمة في إنتاج الأجيال القادمة"
        ],
        "correctIndex": 3,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-genetic-algorithms-q59",
        "text": "أي الخصائص التالية يجب أن يتصف بها تابع الملاءمة ( Fitness Function) في الخوارزميات الجينية؟",
        "answers": [
          "أن يقيس بشكل كمي مدى جودة الحل",
          "أن يوضح كيف يمكن إنتاج أفراد جيدين من الحل المعطى",
          "أن يكون سريع الحساب بشكل كافي",
          "أن تكون قيمته موجبة دائمًا"
        ],
        "correctIndex": 3,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-genetic-algorithms-q60",
        "text": "تعد الخوارزميات الجينية مثالاً على",
        "answers": [
          "البحث الاستدلاليHeuristic",
          "الخوارزمية التطوريةEvolutionary algorithm",
          "خوارزمية مستعمرة النملACO",
          "خوارزمية الأسراب PSO"
        ],
        "correctIndex": 1,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-genetic-algorithms-q61",
        "text": "Genetic algorithms are example of:",
        "answers": [
          "Heuristic",
          "Evolutionary algorithm",
          "ACO",
          "PSO"
        ],
        "correctIndex": 1,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-genetic-algorithms-q62",
        "text": "In Genetic Algorithm, in the mutation process _______",
        "answers": [
          "sequence is changed",
          "gaps are not inserted",
          "sequence is not changed",
          "gaps are not rearranged"
        ],
        "correctIndex": 2,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-genetic-algorithms-q63",
        "text": "Genetic algorithms are heuristic methods that do not guarantee an optimal solution to a problem",
        "answers": [
          "True",
          "False",
          "Sometimes",
          "No answer"
        ],
        "correctIndex": 0,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-genetic-algorithms-q64",
        "text": "A fitness function should not possess the following characteristics:",
        "answers": [
          "It must quantitatively measure how fit a given solution is.",
          "How fit individuals can be produced from the given solution.",
          "The fitness function should be sufficiently fast to compute.",
          "It must be positive."
        ],
        "correctIndex": 3,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-genetic-algorithms-q65",
        "text": "Which of the following are the two key characteristics of the Genetic Algorithm?",
        "answers": [
          "Crossover techniques and Fitness function",
          "Random mutation and Crossover techniques",
          "Random mutation and Individuals among the population",
          "Random mutation and Fitness function"
        ],
        "correctIndex": 0,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      }
    ]
  },
  {
    "id": "bia-swarm-intelligence",
    "subjectId": "intelligent-algorithms",
    "title": "ذكاء الأسراب",
    "description": "خوارزمية سرب الجسيمات ومستعمرات النمل ومفاهيم ذكاء الأسراب.",
    "timeLimit": 15,
    "passingScore": 60,
    "questions": [
      {
        "id": "bia-swarm-intelligence-q1",
        "text": "نقوم بتغير سرعة الجسيم وفق القانون:",
        "answers": [
          "𝒗𝒊+𝟏 = 𝒗𝒊 + 𝒄𝟏 × 𝒓𝒂𝒏𝒅𝟏 × (𝒑𝒃𝒆𝒔𝒕 − 𝒑𝒓𝒆𝒔𝒆𝒏𝒕𝒊)+ 𝒄𝟐 × 𝒓𝒂𝒏𝒅𝟐 × (𝒈𝒃𝒆𝒔𝒕 − 𝒑𝒓𝒆𝒔𝒆𝒏𝒕𝒊)",
          "𝒗𝒊+𝟏 = 𝒗𝒊 + 𝒄𝟏 × 𝒓𝒂𝒏𝒅𝟏 + (𝒑𝒃𝒆𝒔𝒕 − 𝒑𝒓𝒆𝒔𝒆𝒏𝒕𝒊)+ 𝒄𝟐 × 𝒓𝒂𝒏𝒅𝟐 + (𝒈𝒃𝒆𝒔𝒕 − 𝒑𝒓𝒆𝒔𝒆𝒏𝒕𝒊)",
          "𝒗𝒊+𝟏 = 𝒗𝒊 + 𝒄𝟏 × 𝒓𝒂𝒏𝒅𝟏/(𝒑𝒃𝒆𝒔𝒕 − 𝒑𝒓𝒆𝒔𝒆𝒏𝒕𝒊)+ 𝒄𝟐 × 𝒓𝒂𝒏𝒅𝟐 × (𝒈𝒃𝒆𝒔𝒕 − 𝒑𝒓𝒆𝒔𝒆𝒏𝒕𝒊)",
          "𝒗𝒊+𝟏 = 𝒗𝒊 + 𝒄𝟏 × 𝒓𝒂𝒏𝒅𝟏 × (𝒑𝒃𝒆𝒔𝒕 − 𝒑𝒓𝒆𝒔𝒆𝒏𝒕𝒊)+ 𝒄𝟐 × 𝒓𝒂𝒏𝒅𝟐 / (𝒈𝒃𝒆𝒔𝒕 − 𝒑𝒓𝒆𝒔𝒆𝒏𝒕𝒊)"
        ],
        "correctIndex": 0,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-swarm-intelligence-q2",
        "text": "لدينا جسيم واحد في السرب إذا علمت في المرحلة i أن موقع الجسيم5، وسرعة الجسيم2 ، وأفضل قيمة ملائمة سجلها الجسيم 8، وأفضل قيمة ملائمة ضمن السرب كامل هي12 وقيمة الثواب(معاملات التسارع) هي2 لـc1 و2 لـc2، وحصلنا على القيمة العشوائية الأولى 0.5، والقيمة العشوائية الثانية0.5 . المطلوب حساب السرعة التالية 𝒗𝒊+𝟏 ، وأيضاً حساب الموقع التالي 𝒑𝒓𝒆𝒔𝒆𝒏𝒕𝒊+𝟏",
        "answers": [
          "𝒗𝒊+𝟏 = 𝟏𝟕, 𝒑𝒓𝒆𝒔𝒆𝒏𝒕𝒊+𝟏 = 𝟏𝟕",
          "𝒗𝒊+𝟏 = 𝟏𝟕, 𝒑𝒓𝒆𝒔𝒆𝒏𝒕𝒊+𝟏 = 𝟏𝟐",
          "𝒗𝒊+𝟏 = 𝟏𝟐, 𝒑𝒓𝒆𝒔𝒆𝒏𝒕𝒊+𝟏 = 𝟏𝟕",
          "𝒗𝒊+𝟏 = 𝟏𝟐, 𝒑𝒓𝒆𝒔𝒆𝒏𝒕𝒊+𝟏 = 𝟏𝟐"
        ],
        "correctIndex": 2,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-swarm-intelligence-q3",
        "text": "واحد مما يلي لا يكون للجسيم (Particle) في خوارزمية سرب الجسيماتPSO):",
        "answers": [
          "موقع الجسيم في المرحلة",
          "تسارع الجسيم في المرحلة",
          "أفضل قيمة ملائمة سجلها الجسيم",
          "أفصل قيمة ملائمة مسجلة ضمن كامل السرب"
        ],
        "correctIndex": 1,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-swarm-intelligence-q4",
        "text": "تشترك خوارزمية الأسراب PSO مع خوارزمية الجينية GA جميع ما يلي ماعدا: (حدد الخيار الذي لا تشترك فيه الخوارزميتين)",
        "answers": [
          "كلا الخوارزميتين تملكان في البداية تجمع من الحلول البدائية العشوائية",
          "كلا الخوارزميتين تملكان عاملالملاءمة Fitness Value لتقييم التجمع",
          "كلا الخوارزميتين تقومان بتحديث القيم للبحث عن قيمة أمثلية",
          "كلا الخوارزميتين تستخدمان العمليات الجينية"
        ],
        "correctIndex": 3,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-swarm-intelligence-q5",
        "text": "يلعب حمض النملPheromone الدور الأساسي:",
        "answers": [
          "Long term memory",
          "short term memory",
          "medium term memory"
        ],
        "correctIndex": 0,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-swarm-intelligence-q6",
        "text": "واحد مما يلي ليس من سلوك النمل:",
        "answers": [
          "Ant behavior is stochastic",
          "The behavior is induced by direct communication",
          "Ants explore the search space",
          "Limited ability to sense local environment"
        ],
        "correctIndex": 1,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      },
      {
        "id": "bia-swarm-intelligence-q7",
        "text": "أي من الخوارزميات التالية هو تحكم إداري؟",
        "answers": [
          "النمل",
          "النحل",
          "الاسراب",
          "جميع ما سبق"
        ],
        "correctIndex": 3,
        "explanation": "الإجابة معتمدة بحسب مفتاح الإجابات في ملف BIA601."
      }
    ]
  }
]
