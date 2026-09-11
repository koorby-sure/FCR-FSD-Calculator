
    (function () {
      "use strict";

      const I18N = {
        ru: {
          months: ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],
          weekdays: ["ВС","ПН","ВТ","СР","ЧТ","ПТ","СБ"],
          calendarHeads: ["ПН","ВТ","СР","ЧТ","ПТ","СБ","ВС"],
          text: {
            heroTitle: "Калькулятор FSD / FCR",
            heroText: "Расчёт FCR, FSD и вариантов ускорения доставки в одном месте.",
            guideTitle: "Справочник",
            mainTabLabel: "Калькулятор",
            supplierGameTabLabel: "Supplier Game",
            supplierGameTitle: "Landmark Dhanil",
            supplierGameHint: "Кликайте по фото, набирайте XP и комбо.",
            clicksLabel: "Клики",
            xpLabel: "XP",
            comboLabel: "Комбо",
            bestComboLabel: "Лучшее",
            dealMeterLabel: "Переговоры",
            missionLabel: "МИССИЯ",
            claimLabel: "Забрать",
            achievementsLabel: "Достижения",
            resetClicks: "Сбросить прогресс",
            tapLabel: "TAP",
            resetClicks: "Сбросить",

            fsdHint: "Введите FSD вручную или выберите четверг в календаре.",
            fcrHint: "Введите FCR как день и месяц. FSD автоматически переносится на ближайший четверг вперёд.",
            datePlaceholder: "Введите дату в формате ДД.ММ или ДДММ",
            year: "Год",
            calendar: "Календарь",
            country: "Страна",
            deliveryMethod: "Способ доставки",
            pointOfDeparture: "Point of departure",

            daysCalcTitle: "Калькулятор дней",
            daysCalcHint: "Посчитать дни между датами или прибавить / вычесть дни.",
            daysModeBetween: "Между датами",
            daysModeAdd: "Дата ± дни",
            daysDateFrom: "Дата",
            daysDateTo: "Дата до",
            daysNumber: "Дней",
            daysDatePlaceholder: "ДД.ММ или ДДММ",
            daysCalcWaiting: "Введите данные",
            daysResultDays: "дней",
            daysResultFrom: "от",
            daysResultTo: "до",
            daysResultAfter: "Результат",
            daysToFcrTitle: "Дней до FCR от сегодня",
            fcrNotSelected: "FCR не выбран",
            fcrSource: "Источник FCR",
            sourceFsd: "От FSD → FCR",
            sourceFcr: "От FCR → FSD",
            sourceManual: "Ручной ввод",

            accelerationTitle: "Ускорение доставки",
            accelerationHint: "Введите FCR и страну. Таблица покажет FSD в порядке: Original FSD, Sea-Truck, Sea-Air, Air.",
            calculateOptions: "Посчитать варианты",
            outputMonth: "Месяц вывода",

            countriesTitle: "Маршруты, сроки и тарифы",
            countriesHint: "Данные сгруппированы по странам. Тарифы показаны только в этом закрытом разделе, чтобы не перегружать основной калькулятор.",
            deliveryDays: "Дней доставки",
            freightBorder: "Фрахт до границы",
            weightedFreight: "Средневзвешенный",
            countryPlaceholder: "например: Bangladesh",
            pointPlaceholder: "например: Shanghai",
            methodPlaceholder: "например: Sea-Truck",
            addUpdate: "Добавить / обновить",
            resetDefaults: "Вернуть стандартные",

            outputCalendarTitle: "Календарь выводов 2026/2027",
            calendarHint: "Последний четверг месяца относится к следующему FSD-месяцу. Например, 29.01.2026 отображается в феврале.",

            guideFsdTitle: "Есть FSD",
            guideFsdText: "Используйте блок FSD → FCR.",
            guideFsdLi1: "Введите FSD: 1510 или 15.10",
            guideFsdLi2: "Выберите год",
            guideFsdLi3: "Выберите страну и способ доставки",
            guideFsdLi4: "Получите дату FCR",
            guideFcrTitle: "Есть FCR",
            guideFcrText: "Используйте блок FCR → FSD.",
            guideFcrLi1: "Введите FCR: 3008 или 30.08",
            guideFcrLi2: "Выберите год",
            guideFcrLi3: "Выберите страну и способ доставки",
            guideFcrLi4: "FSD переносится на ближайший четверг вперёд",
            guideAccelTitle: "Нужно ускорение",
            guideAccelText: "Используйте блок Ускорение доставки.",
            guideAccelLi1: "Введите FCR",
            guideAccelLi2: "Выберите страну",
            guideAccelLi3: "Сайт покажет FSD по Original, Sea-Truck, Sea-Air и Air",
            flowFsd: "дата поступления продукта в магазины",
            flowFcr: "дата отгрузки",
            flowCounterTitle: "Дней до FCR",
            flowCounterText: "счётчик от сегодня",
            rulesTitle: "Правила дат",
            rulesText: "FSD всегда четверг. Если введена другая дата, сайт предложит ближайший четверг назад и вперёд.",
            formatsTitle: "Форматы ввода",
            formatsText: "Можно вводить 1510, 15.10, 15102026 или 15.10.2026.",
            dataTitle: "Данные стран",
            dataText: "Настройки сохраняются только в браузере. Чтобы изменить данные для всех, обновите код на GitHub.",

            footerVersion: "Версия от 10.09.2026",

            fcrLabel: "FCR",
            fsdLabel: "FSD",
            errorTitle: "Ошибка",
            dateError: "Введите дату в формате ДД.ММ или ДДММ",
            numberDateError: "Дата должна содержать только числа",
            invalidDateError: "Такой даты не существует",
            noLaneError: "Для выбранной страны и способа доставки не задан срок",
            noCountryData: "Для выбранной страны нет данных",
            fsdNotThursday: "FSD не четверг",
            choosePrevThursday: "Выбрать четверг назад",
            chooseNextThursday: "Выбрать четверг вперёд",
            alreadyThursday: "Дата уже четверг, перенос не нужен.",
            rawDate: "Предварительная дата",
            moveForward: "перенос вперёд",
            daysShort: "дн.",
            sourceFromFsd: "от FSD → FCR",
            sourceFromFcr: "от FCR → FSD",
            sourceManualText: "ручной ввод",
            point: "Point of departure",
            method: "Способ",
            days: "Дней",
            action: "Действие",
            delete: "Удалить",
            originalFsd: "Original FSD",
            seaTruck: "Sea-Truck",
            seaAir: "Sea-Air",
            air: "Air"
          }
        },

        en: {
          months: ["January","February","March","April","May","June","July","August","September","October","November","December"],
          weekdays: ["SUN","MON","TUE","WED","THU","FRI","SAT"],
          calendarHeads: ["MON","TUE","WED","THU","FRI","SAT","SUN"],
          text: {
            heroTitle: "FSD / FCR Calculator",
            heroText: "Calculate FCR, FSD and delivery acceleration options in one place.",
            guideTitle: "Guide",
            mainTabLabel: "Calculator",
            supplierGameTabLabel: "Supplier Game",
            supplierGameTitle: "Landmark Dhanil",
            supplierGameHint: "Tap the photo to gain XP and build combos.",
            clicksLabel: "Clicks",
            xpLabel: "XP",
            comboLabel: "Combo",
            bestComboLabel: "Best",
            dealMeterLabel: "Negotiation",
            missionLabel: "MISSION",
            claimLabel: "Claim",
            achievementsLabel: "Achievements",
            resetClicks: "Reset progress",
            tapLabel: "TAP",
            resetClicks: "Reset",

            fsdHint: "Enter FSD manually or choose a Thursday in the calendar.",
            fcrHint: "Enter FCR as day and month. FSD is moved to the nearest Thursday forward.",
            datePlaceholder: "Enter date in DD.MM or DDMM format",
            year: "Year",
            calendar: "Calendar",
            country: "Country",
            deliveryMethod: "Delivery method",
            pointOfDeparture: "Point of departure",

            daysCalcTitle: "Days calculator",
            daysCalcHint: "Count days between dates or add / subtract days.",
            daysModeBetween: "Between dates",
            daysModeAdd: "Date ± days",
            daysDateFrom: "Date",
            daysDateTo: "Date to",
            daysNumber: "Days",
            daysDatePlaceholder: "DD.MM or DDMM",
            daysCalcWaiting: "Enter values",
            daysResultDays: "days",
            daysResultFrom: "from",
            daysResultTo: "to",
            daysResultAfter: "Result",
            daysToFcrTitle: "Days to FCR from today",
            fcrNotSelected: "FCR is not selected",
            fcrSource: "FCR source",
            sourceFsd: "From FSD → FCR",
            sourceFcr: "From FCR → FSD",
            sourceManual: "Manual input",

            accelerationTitle: "Delivery acceleration",
            accelerationHint: "Enter FCR and country. The table shows FSD in this order: Original FSD, Sea-Truck, Sea-Air, Air.",
            calculateOptions: "Calculate options",
            outputMonth: "Output month",

            countriesTitle: "Routes, lead times and tariffs",
            countriesHint: "Data is grouped by country. Tariffs are shown only in this closed section to keep the main calculator compact.",
            deliveryDays: "Delivery days",
            freightBorder: "Freight to border",
            weightedFreight: "Weighted average",
            countryPlaceholder: "for example: Bangladesh",
            pointPlaceholder: "for example: Shanghai",
            methodPlaceholder: "for example: Sea-Truck",
            addUpdate: "Add / update",
            resetDefaults: "Reset defaults",

            outputCalendarTitle: "Output calendar 2026/2027",
            calendarHint: "The last Thursday of a month belongs to the next FSD month. Example: 29.01.2026 is displayed in February.",

            guideFsdTitle: "You have FSD",
            guideFsdText: "Use the FSD → FCR block.",
            guideFsdLi1: "Enter FSD: 1510 or 15.10",
            guideFsdLi2: "Choose year",
            guideFsdLi3: "Choose country and delivery method",
            guideFsdLi4: "Get FCR date",
            guideFcrTitle: "You have FCR",
            guideFcrText: "Use the FCR → FSD block.",
            guideFcrLi1: "Enter FCR: 3008 or 30.08",
            guideFcrLi2: "Choose year",
            guideFcrLi3: "Choose country and delivery method",
            guideFcrLi4: "FSD moves to the nearest Thursday forward",
            guideAccelTitle: "You need acceleration",
            guideAccelText: "Use the Delivery acceleration block.",
            guideAccelLi1: "Enter FCR",
            guideAccelLi2: "Choose country",
            guideAccelLi3: "The site shows FSD by Original, Sea-Truck, Sea-Air and Air",
            flowFsd: "date when product arrives in stores",
            flowFcr: "shipping date",
            flowCounterTitle: "Days to FCR",
            flowCounterText: "counter from today",
            rulesTitle: "Date rules",
            rulesText: "FSD is always Thursday. If another date is entered, the site offers the nearest Thursday backward and forward.",
            formatsTitle: "Input formats",
            formatsText: "You can enter 1510, 15.10, 15102026 or 15.10.2026.",
            dataTitle: "Country data",
            dataText: "Settings are saved only in the browser. To change data for everyone, update the code on GitHub.",

            footerVersion: "Version 10.09.2026",

            fcrLabel: "FCR",
            fsdLabel: "FSD",
            errorTitle: "Error",
            dateError: "Enter date in DD.MM or DDMM format",
            numberDateError: "Date must contain only numbers",
            invalidDateError: "This date does not exist",
            noLaneError: "Delivery days are not set for the selected country and method",
            noCountryData: "No data for selected country",
            fsdNotThursday: "FSD is not Thursday",
            choosePrevThursday: "Choose Thursday backward",
            chooseNextThursday: "Choose Thursday forward",
            alreadyThursday: "The date is already Thursday, no move needed.",
            rawDate: "Preliminary date",
            moveForward: "move forward",
            daysShort: "days",
            sourceFromFsd: "from FSD → FCR",
            sourceFromFcr: "from FCR → FSD",
            sourceManualText: "manual input",
            point: "Point of departure",
            method: "Method",
            days: "Days",
            action: "Action",
            delete: "Delete",
            originalFsd: "Original FSD",
            seaTruck: "Sea-Truck",
            seaAir: "Sea-Air",
            air: "Air"
          }
        }
      };

      const COUNTRY_LABELS = {
        China: { ru: "Китай", en: "China" },
        Vietnam: { ru: "Вьетнам", en: "Vietnam" },
        India: { ru: "Индия", en: "India" },
        Bangladesh: { ru: "Бангладеш", en: "Bangladesh" },
        Pakistan: { ru: "Пакистан", en: "Pakistan" },
        Uzbekistan: { ru: "Узбекистан", en: "Uzbekistan" },
        Myanmar: { ru: "Мьянма", en: "Myanmar" },
        Turkey: { ru: "Турция", en: "Turkey" }
      };

      const DEFAULT_LANES = [
        { id: "china-shanghai-sea-train", country: "China", point: "Shanghai", method: "Sea-Train", days: 50, freightBorder: 4500, weighted: 10311, original: true },
        { id: "china-shanghai-sea-truck", country: "China", point: "Shanghai", method: "Sea-Truck", days: 44, freightBorder: 4500, weighted: 11690 },
        { id: "china-shanghai-truck", country: "China", point: "Shanghai", method: "Truck", days: 36, freightBorder: 11470, weighted: 11788 },
        { id: "china-shanghai-sea-air", country: "China", point: "Shanghai", method: "Sea-Air", days: 36, freightBorder: 4500, weighted: 27810 },
        { id: "china-shanghai-air", country: "China", point: "Shanghai", method: "Air", days: 18, freightBorder: 7.003125, weighted: 8.870833333333334 },

        { id: "china-qingdao-sea-train", country: "China", point: "Qingdao", method: "Sea-Train", days: 50, freightBorder: 4250, weighted: 10046, original: true },
        { id: "china-qingdao-sea-truck", country: "China", point: "Qingdao", method: "Sea-Truck", days: 44, freightBorder: 4250, weighted: 11424 },
        { id: "china-qingdao-truck", country: "China", point: "Qingdao", method: "Truck", days: 36, freightBorder: 11944, weighted: 12262 },
        { id: "china-qingdao-sea-air", country: "China", point: "Qingdao", method: "Sea-Air", days: 36, freightBorder: 4250, weighted: 27545 },
        { id: "china-qingdao-air", country: "China", point: "Qingdao", method: "Air", days: 18, freightBorder: 8.912013256006627, weighted: 11.293454846727423 },

        { id: "vietnam-haiphong-sea-train", country: "Vietnam", point: "Haiphong", method: "Sea-Train", days: 50, freightBorder: 2900, weighted: 9222, original: true },
        { id: "vietnam-haiphong-sea-truck", country: "Vietnam", point: "Haiphong", method: "Sea-Truck", days: 44, freightBorder: 2500, weighted: 10199 },
        { id: "vietnam-haiphong-sea-air", country: "Vietnam", point: "Haiphong", method: "Sea-Air", days: 36, freightBorder: 2500, weighted: 26319 },
        { id: "vietnam-hochiminh-air", country: "Vietnam", point: "HoChiMinh", method: "Air", days: 17, freightBorder: 3.575766395032984, weighted: 4.360593713620489 },

        { id: "bangladesh-chittagong-sea-truck", country: "Bangladesh", point: "Chittagong", method: "Sea-Truck", days: 65, freightBorder: 2450, weighted: 9808, original: true },
        { id: "bangladesh-chittagong-sea-air", country: "Bangladesh", point: "Chittagong", method: "Sea-Air", days: 57, freightBorder: 2450, weighted: 25928 },
        { id: "bangladesh-chittagong-air", country: "Bangladesh", point: "Chittagong", method: "Air", days: 20, freightBorder: 5.430012401818933, weighted: 6.805208763952046 },

        { id: "india-tutikorin-sea-truck", country: "India", point: "Tutikorin", method: "Sea-Truck", days: 79, freightBorder: 3200, weighted: 10383, original: true },
        { id: "india-tutikorin-air", country: "India", point: "Tutikorin", method: "Air", days: 20, freightBorder: 5.976233613982735, weighted: 7.064265160396462 },
        { id: "india-mundra-nava-sheva-sea-truck", country: "India", point: "Mundra/Nava Sheva", method: "Sea-Truck", days: 69, freightBorder: 3800, weighted: 10931 },
        { id: "india-mundra-nava-sheva-air", country: "India", point: "Mundra/Nava Sheva", method: "Air", days: 20, freightBorder: 5.478865083960625, weighted: 6.978343949044586 },

        { id: "pakistan-pakistan-sea-truck", country: "Pakistan", point: "Pakistan", method: "Sea-Truck", days: 65, freightBorder: 3650, weighted: 11280, original: true },
        { id: "pakistan-pakistan-air", country: "Pakistan", point: "Pakistan", method: "Air", days: 20, freightBorder: 5.330009129854624, weighted: 6.710021771191797 },

        { id: "uzbekistan-uzbekistan-truck", country: "Uzbekistan", point: "Uzbekistan", method: "Truck", days: 20, freightBorder: 3300, weighted: 3515, original: true },

        { id: "myanmar-myanmar-sea-truck", country: "Myanmar", point: "Myanmar", method: "Sea-Truck", days: 65, freightBorder: 3800, weighted: 10934, original: true },
        { id: "myanmar-myanmar-air", country: "Myanmar", point: "Myanmar", method: "Air", days: 20, freightBorder: 8.954726176734642, weighted: 10.845453379504939 },

        { id: "turkey-turkey-truck", country: "Turkey", point: "Turkey", method: "Truck", days: 20, freightBorder: 10000, weighted: 10303, original: true },
        { id: "turkey-turkey-air", country: "Turkey", point: "Turkey", method: "Air", days: 18, freightBorder: 2.202576587543112, weighted: 3.7030837898153783 }
      ];

      const METHOD_ORDER = {
        "Sea-Train": 1,
        "Sea-Truck": 2,
        "Truck": 3,
        "Sea-Air": 4,
        "Air": 5
      };

      const STORE_KEY = "fsdFcrLanes_v22_20260910_rates";
      const $ = id => document.getElementById(id);

      let currentLang = "ru";
      let lanes = loadLanes();
      let lastFcrFromFsd = null;
      let lastFcrFromFcrBlock = null;
      let fsdCalendarMonth = 0;
      let fsdCalendarYear = 2026;

      function t(key) {
        return I18N[currentLang].text[key] || key;
      }

      function pad(value) {
        return String(value).padStart(2, "0");
      }

      function escapeHtml(value) {
        return String(value).replace(/[&<>"']/g, char => ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#039;"
        }[char]));
      }

      function displayCountry(country) {
        return COUNTRY_LABELS[country]?.[currentLang] || country;
      }

      function makeId(country, point, method) {
        return [country, point, method]
          .join("-")
          .toLowerCase()
          .replace(/[^a-zа-я0-9]+/gi, "-")
          .replace(/^-+|-+$/g, "");
      }

      function formatDate(date) {
        return `${pad(date.getDate())}.${pad(date.getMonth() + 1)}.${date.getFullYear()}`;
      }

      function formatShortDate(date) {
        return `${pad(date.getDate())}.${pad(date.getMonth() + 1)}`;
      }

      function todayStart() {
        const now = new Date();
        return new Date(now.getFullYear(), now.getMonth(), now.getDate());
      }

      function addDays(date, days) {
        const d = new Date(date);
        d.setDate(d.getDate() + days);
        return d;
      }

      function daysBetween(start, end) {
        return Math.round((end - start) / 86400000);
      }

      function dayName(date) {
        return I18N[currentLang].weekdays[date.getDay()];
      }

      function nextThursdayOnOrAfter(date) {
        const d = new Date(date);
        const shift = (4 - d.getDay() + 7) % 7;
        d.setDate(d.getDate() + shift);
        return d;
      }

      function previousThursdayOnOrBefore(date) {
        const d = new Date(date);
        const shift = (d.getDay() - 4 + 7) % 7;
        d.setDate(d.getDate() - shift);
        return d;
      }

      function isLastThursdayOfMonth(date) {
        return date.getDay() === 4 && addDays(date, 7).getMonth() !== date.getMonth();
      }

      function getBusinessMonthForThursday(date) {
        let year = date.getFullYear();
        let month = date.getMonth();

        if (isLastThursdayOfMonth(date)) {
          month += 1;
          if (month > 11) {
            month = 0;
            year += 1;
          }
        }

        return { year, month };
      }

      function normalizeDateText(value) {
        const raw = String(value || "").trim();
        if (!raw) return "";

        const compact = raw.replace(/\D/g, "");

        if (/^\d{4}$/.test(compact) && !/[./\-\s]/.test(raw)) {
          return `${compact.slice(0, 2)}.${compact.slice(2, 4)}`;
        }

        if (/^\d{8}$/.test(compact) && !/[./\-\s]/.test(raw)) {
          return `${compact.slice(0, 2)}.${compact.slice(2, 4)}.${compact.slice(4, 8)}`;
        }

        return raw
          .replace(/\//g, ".")
          .replace(/-/g, ".")
          .replace(/\s+/g, ".")
          .replace(/\.+/g, ".");
      }

      function parseTextDate(value, year) {
        const text = normalizeDateText(value);
        const parts = text.split(".").filter(Boolean);

        if (parts.length < 2 || parts.length > 3) {
          throw new Error(t("dateError"));
        }

        const day = Number(parts[0]);
        const month = Number(parts[1]);
        const finalYear = parts[2] ? Number(parts[2]) : Number(year);

        if (!Number.isInteger(day) || !Number.isInteger(month) || !Number.isInteger(finalYear)) {
          throw new Error(t("numberDateError"));
        }

        const date = new Date(finalYear, month - 1, day);

        if (date.getFullYear() !== finalYear || date.getMonth() !== month - 1 || date.getDate() !== day) {
          throw new Error(t("invalidDateError"));
        }

        return date;
      }

      function normalizeDateField(inputId, yearId) {
        const input = $(inputId);
        const yearSelect = $(yearId);
        const value = input.value.trim();
        if (!value) return;

        try {
          const date = parseTextDate(value, Number(yearSelect.value));

          if ([...yearSelect.options].some(option => option.value === String(date.getFullYear()))) {
            yearSelect.value = String(date.getFullYear());
          }

          input.value = formatShortDate(date);
          input.classList.remove("is-error");
        } catch (_) {}
      }

      function isDateInputReady(value) {
        const raw = String(value || "").trim();
        const compact = raw.replace(/\D/g, "");
        return compact.length >= 4 || raw.includes(".") || raw.includes("/") || raw.includes("-");
      }

      function loadLanes() {
        try {
          const saved = JSON.parse(localStorage.getItem(STORE_KEY));
          if (Array.isArray(saved) && saved.length) return saved;
        } catch (_) {}

        return DEFAULT_LANES.slice();
      }

      function saveLanes() {
        try {
          localStorage.setItem(STORE_KEY, JSON.stringify(lanes));
        } catch (_) {}
      }

      function getCountries() {
        return Array.from(new Set(lanes.map(x => x.country)))
          .sort((a, b) => displayCountry(a).localeCompare(displayCountry(b), currentLang === "ru" ? "ru" : "en"));
      }

      function getLanesByCountry(country) {
        return lanes
          .filter(x => x.country === country)
          .sort((a, b) => {
            const pointDiff = String(a.point || "").localeCompare(String(b.point || ""), currentLang === "ru" ? "ru" : "en");
            if (pointDiff !== 0) return pointDiff;
            return (METHOD_ORDER[a.method] || 99) - (METHOD_ORDER[b.method] || 99);
          });
      }

      function getUniqueMethodLanesByCountry(country) {
        const map = new Map();

        getLanesByCountry(country).forEach(lane => {
          const key = `${lane.method}|${lane.days}`;
          if (!map.has(key)) map.set(key, lane);
        });

        return Array.from(map.values()).sort((a, b) => {
          return (METHOD_ORDER[a.method] || 99) - (METHOD_ORDER[b.method] || 99);
        });
      }

      function laneLabel(lane) {
        const points = Array.from(new Set(lanes.filter(x => x.country === lane.country).map(x => x.point || "")));
        const showPoint = points.length > 1;
        return showPoint
          ? `${lane.method} — ${lane.days} ${t("daysShort")} — ${lane.point}`
          : `${lane.method} — ${lane.days} ${t("daysShort")}`;
      }

      function formatTariff(value) {
        if (value === null || value === undefined || value === "") return "—";
        const num = Number(value);
        if (!Number.isFinite(num)) return escapeHtml(value);
        return num >= 100 ? Math.round(num).toLocaleString(currentLang === "ru" ? "ru-RU" : "en-US") : num.toFixed(2);
      }

      function getLaneFromSelect(selectId) {
        const id = $(selectId).value;
        const lane = lanes.find(x => x.id === id);
        if (!lane) throw new Error(t("noLaneError"));
        return lane;
      }

      function clearInputErrors() {
        document.querySelectorAll(".is-error").forEach(node => node.classList.remove("is-error"));
      }

      function markInputError(ids) {
        ids.forEach(id => {
          const node = $(id);
          if (node) node.classList.add("is-error");
        });
      }

      function renderStaticText() {
        document.documentElement.lang = currentLang;

        document.querySelectorAll("[data-i18n]").forEach(node => {
          const key = node.getAttribute("data-i18n");
          node.textContent = t(key);
        });

        document.querySelectorAll("[data-i18n-placeholder]").forEach(node => {
          const key = node.getAttribute("data-i18n-placeholder");
          node.setAttribute("placeholder", t(key));
        });

        document.querySelectorAll(".lang-btn").forEach(button => {
          button.classList.toggle("active", button.dataset.lang === currentLang);
        });
      }

      function renderCountrySelect(selectId, oldValue) {
        const select = $(selectId);
        const countries = getCountries();

        select.innerHTML = countries.map(country => {
          return `<option value="${escapeHtml(country)}">${escapeHtml(displayCountry(country))}</option>`;
        }).join("");

        if (countries.includes(oldValue)) select.value = oldValue;
      }

      function renderLaneSelect(countryId, laneId, oldValue) {
        const country = $(countryId).value;
        const countryLanes = getUniqueMethodLanesByCountry(country);
        const select = $(laneId);

        select.innerHTML = countryLanes.map(lane => {
          return `<option value="${escapeHtml(lane.id)}">${escapeHtml(laneLabel(lane))}</option>`;
        }).join("");

        if (countryLanes.some(lane => lane.id === oldValue)) {
          select.value = oldValue;
        }
      }

      function renderLaneGroups() {
        const countries = getCountries();

        $("laneGroups").innerHTML = countries.map(country => {
          const countryLanes = getLanesByCountry(country);

          const rows = countryLanes.map(item => {
            const index = lanes.indexOf(item);

            return `
              <tr>
                <td>${escapeHtml(item.point || "—")}</td>
                <td><span class="pill">${escapeHtml(item.method)}</span></td>
                <td>${item.days}</td>
                <td>${formatTariff(item.freightBorder)}</td>
                <td>${formatTariff(item.weighted)}</td>
                <td><button type="button" class="danger delete-lane" data-index="${index}">${t("delete")}</button></td>
              </tr>
            `;
          }).join("");

          return `
            <details class="country-group">
              <summary>${escapeHtml(displayCountry(country))}</summary>
              <div class="country-group-body">
                <div class="table-scroll">
                  <table>
                    <thead>
                      <tr>
                        <th>${t("point")}</th>
                        <th>${t("method")}</th>
                        <th>${t("days")}</th>
                        <th>${t("freightBorder")}</th>
                        <th>${t("weightedFreight")}</th>
                        <th>${t("action")}</th>
                      </tr>
                    </thead>
                    <tbody>${rows}</tbody>
                  </table>
                </div>
              </div>
            </details>
          `;
        }).join("");
      }

      function renderControls() {
        const oldCountryFsd = $("countryFromFsd").value;
        const oldLaneFsd = $("laneFromFsd").value;
        const oldCountryFcr = $("countryFromFcr").value;
        const oldLaneFcr = $("laneFromFcr").value;
        const oldAccelCountry = $("accelCountry").value;

        renderCountrySelect("countryFromFsd", oldCountryFsd);
        renderCountrySelect("countryFromFcr", oldCountryFcr);
        renderCountrySelect("accelCountry", oldAccelCountry);

        renderLaneSelect("countryFromFsd", "laneFromFsd", oldLaneFsd);
        renderLaneSelect("countryFromFcr", "laneFromFcr", oldLaneFcr);

        renderLaneGroups();
      }

      function showResult(id, html) {
        const box = $(id);
        box.classList.remove("error");
        box.innerHTML = html;
        box.classList.add("show");
      }

      function showError(id, message, inputIds = []) {
        const box = $(id);
        box.innerHTML = `
          <div class="big">${t("errorTitle")}</div>
          <div class="small">${escapeHtml(message)}</div>
        `;
        box.classList.add("show", "error");
        markInputError(inputIds);
      }

      function clearResult(id) {
        const box = $(id);
        box.innerHTML = "";
        box.classList.remove("show", "error");
      }

      function clearWarning() {
        $("fsdWarning").innerHTML = "";
        $("fsdWarning").classList.remove("show");
      }

      function syncCalendarToInput() {
        const value = $("fsdText").value.trim();
        const year = Number($("fsdYear").value);

        if (value) {
          try {
            const date = parseTextDate(value, year);
            fsdCalendarMonth = date.getMonth();
            fsdCalendarYear = date.getFullYear();
            return;
          } catch (_) {}
        }

        fsdCalendarYear = year;
      }

      function setFsdDate(date) {
        $("fsdText").value = formatShortDate(date);
        $("fsdYear").value = String(date.getFullYear());
        fsdCalendarMonth = date.getMonth();
        fsdCalendarYear = date.getFullYear();
        renderFsdCalendar();
        calculateFcr();
      }

      function renderFsdCalendar() {
        $("fsdCalendarTitle").textContent = `${I18N[currentLang].months[fsdCalendarMonth]} ${fsdCalendarYear}`;

        const selectedValue = $("fsdText").value.trim();
        const selectedYear = Number($("fsdYear").value);
        let selectedDate = null;

        try {
          if (selectedValue) selectedDate = parseTextDate(selectedValue, selectedYear);
        } catch (_) {}

        let html = `<div class="calendar-grid">`;

        I18N[currentLang].calendarHeads.forEach(day => {
          html += `<div class="calendar-cell calendar-weekday">${day}</div>`;
        });

        const firstDay = new Date(fsdCalendarYear, fsdCalendarMonth, 1);
        const daysInMonth = new Date(fsdCalendarYear, fsdCalendarMonth + 1, 0).getDate();
        const offset = (firstDay.getDay() + 6) % 7;

        for (let i = 0; i < offset; i++) {
          html += `<div class="calendar-cell calendar-empty"></div>`;
        }

        for (let day = 1; day <= daysInMonth; day++) {
          const date = new Date(fsdCalendarYear, fsdCalendarMonth, day);
          const isThursday = date.getDay() === 4;
          const isSelected = selectedDate && formatDate(date) === formatDate(selectedDate);

          if (isThursday) {
            html += `
              <button
                type="button"
                class="calendar-cell calendar-thursday ${isSelected ? "calendar-selected" : ""}"
                data-date="${formatDate(date)}">
                ${day}
              </button>
            `;
          } else {
            html += `<div class="calendar-cell calendar-disabled">${day}</div>`;
          }
        }

        html += `</div>`;
        $("fsdCalendarGrid").innerHTML = html;
      }

      function calculateFcr() {
        clearInputErrors();
        clearWarning();
        normalizeDateField("fsdText", "fsdYear");

        try {
          const value = $("fsdText").value.trim();

          if (!value) {
            clearResult("fcrResult");
            lastFcrFromFsd = null;
            updateCounter();
            return;
          }

          const fsd = parseTextDate(value, Number($("fsdYear").value));

          if (fsd.getDay() !== 4) {
            const prev = previousThursdayOnOrBefore(fsd);
            const next = nextThursdayOnOrAfter(fsd);

            $("fsdWarning").innerHTML = `
              <b>${t("fsdNotThursday")}:</b> ${formatDate(fsd)} (${dayName(fsd)}).
              <div class="warning-buttons">
                <button type="button" class="choose-fsd" data-date="${formatDate(prev)}">
                  ${t("choosePrevThursday")}: ${formatDate(prev)}
                </button>
                <button type="button" class="choose-fsd" data-date="${formatDate(next)}">
                  ${t("chooseNextThursday")}: ${formatDate(next)}
                </button>
              </div>
            `;

            $("fsdWarning").classList.add("show");
            clearResult("fcrResult");
            lastFcrFromFsd = null;
            updateCounter();
            return;
          }

          const lane = getLaneFromSelect("laneFromFsd");
          const fcr = addDays(fsd, -lane.days);

          lastFcrFromFsd = fcr;

          showResult("fcrResult", `
            <div class="big">${t("fcrLabel")}: ${formatDate(fcr)}</div>
            <div class="small">
              ${escapeHtml(displayCountry(lane.country))}, ${escapeHtml(laneLabel(lane))}.
              ${t("fsdLabel")}: ${formatDate(fsd)} (${dayName(fsd)}).
            </div>
          `);

          updateCounter();
        } catch (error) {
          showError("fcrResult", error.message, ["fsdText"]);
        }
      }

      function calculateFsd() {
        clearInputErrors();
        normalizeDateField("fcrText", "fcrYear");

        try {
          const value = $("fcrText").value.trim();

          if (!value) {
            clearResult("fsdResult");
            lastFcrFromFcrBlock = null;
            updateCounter();
            return;
          }

          const fcr = parseTextDate(value, Number($("fcrYear").value));
          const lane = getLaneFromSelect("laneFromFcr");
          const rawFsd = addDays(fcr, lane.days);
          const fsd = nextThursdayOnOrAfter(rawFsd);
          const moved = daysBetween(rawFsd, fsd);

          lastFcrFromFcrBlock = fcr;

          const extra = moved === 0
            ? t("alreadyThursday")
            : `${t("rawDate")}: ${formatDate(rawFsd)} (${dayName(rawFsd)}), ${t("moveForward")}: +${moved} ${t("daysShort")}`;

          showResult("fsdResult", `
            <div class="big">${t("fsdLabel")}: ${formatDate(fsd)}</div>
            <div class="small">
              ${escapeHtml(displayCountry(lane.country))}, ${escapeHtml(laneLabel(lane))}.
              ${t("fcrLabel")}: ${formatDate(fcr)}. ${extra}
            </div>
          `);

          updateCounter();
        } catch (error) {
          showError("fsdResult", error.message, ["fcrText"]);
        }
      }

      function findLaneForPoint(pointLanes, type) {
        if (type === "original") {
          return pointLanes.find(lane => lane.original) || pointLanes.slice().sort((a, b) => b.days - a.days)[0];
        }

        if (type === "Sea-Truck") return pointLanes.find(lane => lane.method === "Sea-Truck");
        if (type === "Sea-Air") return pointLanes.find(lane => lane.method === "Sea-Air");
        if (type === "Air") return pointLanes.find(lane => lane.method === "Air");

        return null;
      }

      function renderFsdCell(fcr, lane) {
        if (!lane) return "—";

        const fsd = nextThursdayOnOrAfter(addDays(fcr, lane.days));
        const business = getBusinessMonthForThursday(fsd);
        const outputMonth = `${I18N[currentLang].months[business.month]} ${business.year}`;

        return `
          <div class="cell-date">${formatDate(fsd)}</div>
          <div class="cell-note">${escapeHtml(lane.method)} · ${lane.days} ${t("daysShort")}</div>
          <div class="cell-note"><b>${t("outputMonth")}:</b> ${outputMonth}</div>
        `;
      }

      function calculateAcceleration() {
        clearInputErrors();
        normalizeDateField("accelFcrText", "accelYear");

        try {
          const value = $("accelFcrText").value.trim();

          if (!value) {
            clearResult("accelerationResult");
            return;
          }

          const fcr = parseTextDate(value, Number($("accelYear").value));
          const country = $("accelCountry").value;
          const countryLanes = getLanesByCountry(country);

          if (!countryLanes.length) throw new Error(t("noCountryData"));

          const points = Array.from(new Set(countryLanes.map(lane => lane.point || "—")));

          const rows = points.map(point => {
            const pointLanes = countryLanes.filter(lane => (lane.point || "—") === point);

            const original = findLaneForPoint(pointLanes, "original");
            const seaTruck = findLaneForPoint(pointLanes, "Sea-Truck");
            const seaAir = findLaneForPoint(pointLanes, "Sea-Air");
            const air = findLaneForPoint(pointLanes, "Air");

            return `
              <tr>
                <td><b>${escapeHtml(point)}</b></td>
                <td>${renderFsdCell(fcr, original)}</td>
                <td>${renderFsdCell(fcr, seaTruck)}</td>
                <td>${renderFsdCell(fcr, seaAir)}</td>
                <td>${renderFsdCell(fcr, air)}</td>
              </tr>
            `;
          }).join("");

          showResult("accelerationResult", `
            <div class="big">${t("fcrLabel")}: ${formatDate(fcr)}</div>
            <div class="small">${t("fsdLabel")} — ${escapeHtml(displayCountry(country))}</div>
            <div class="table-scroll">
              <table>
                <thead>
                  <tr>
                    <th>${t("point")}</th>
                    <th>${t("originalFsd")}</th>
                    <th>${t("seaTruck")}</th>
                    <th>${t("seaAir")}</th>
                    <th>${t("air")}</th>
                  </tr>
                </thead>
                <tbody>${rows}</tbody>
              </table>
            </div>
          `);
        } catch (error) {
          showError("accelerationResult", error.message, ["accelFcrText"]);
        }
      }

      function getManualFcrDate() {
        const value = $("manualFcr").value.trim();
        if (!value) return null;
        return parseTextDate(value, Number($("manualYear").value));
      }

      function updateCounter() {
        $("manualFcr").classList.remove("is-error");

        const source = $("counterSource").value;
        let date = null;
        let sourceText = "";

        const isManual = source === "manual";

        $("manualFcr").disabled = !isManual;
        $("manualYear").disabled = !isManual;

        if (source === "fromFsd") {
          date = lastFcrFromFsd;
          sourceText = t("sourceFromFsd");
        }

        if (source === "fromFcr") {
          date = lastFcrFromFcrBlock;
          sourceText = t("sourceFromFcr");
        }

        if (source === "manual") {
          normalizeDateField("manualFcr", "manualYear");

          try {
            date = getManualFcrDate();
            sourceText = t("sourceManualText");
            $("manualFcr").classList.remove("is-error");
          } catch (_) {
            date = null;

            if ($("manualFcr").value.trim() && isDateInputReady($("manualFcr").value)) {
              $("manualFcr").classList.add("is-error");
            }
          }
        }

        if (!date) {
          $("daysToFcrMain").textContent = "—";
          $("daysToFcrSub").textContent = t("fcrNotSelected");
          return;
        }

        const diff = daysBetween(todayStart(), date);

        $("daysToFcrMain").textContent = `${diff} ${t("daysShort")}`;
        $("daysToFcrSub").textContent = `${t("fcrLabel")} ${sourceText}: ${formatDate(date)}`;
      }

      function addOrUpdateLane() {
        const country = $("newCountry").value.trim();
        const point = $("newPoint").value.trim();
        const method = $("newMethod").value.trim();
        const days = Number($("newDays").value);

        if (!country || !method || !Number.isInteger(days) || days < 0) {
          alert(currentLang === "ru"
            ? "Введите страну, способ доставки и корректное количество дней."
            : "Enter country, delivery method and valid delivery days.");
          return;
        }

        const id = makeId(country, point, method);
        const existing = lanes.find(item => item.id === id);

        if (existing) {
          existing.country = country;
          existing.point = point;
          existing.method = method;
          existing.days = days;
        } else {
          lanes.push({ id, country, point, method, days, original: false });
        }

        saveLanes();
        renderControls();

        $("newCountry").value = "";
        $("newPoint").value = "";
        $("newMethod").value = "";
        $("newDays").value = "";

        calculateFcr();
        calculateFsd();
        calculateAcceleration();
      }

      function resetLanes() {
        lanes = DEFAULT_LANES.slice();
        saveLanes();
        renderControls();
        calculateFcr();
        calculateFsd();
        calculateAcceleration();
      }

      function getBusinessThursdayMonths(year) {
        const result = Array.from({ length: 12 }, () => []);
        const start = new Date(year - 1, 11, 1);
        const end = new Date(year, 11, 31);
        const cursor = new Date(start);

        while (cursor <= end) {
          if (cursor.getDay() === 4) {
            const business = getBusinessMonthForThursday(cursor);
            if (business.year === year) {
              result[business.month].push(new Date(cursor));
            }
          }

          cursor.setDate(cursor.getDate() + 1);
        }

        return result;
      }

      function renderThursdayCalendar() {
        const year = Number($("calendarYear").value);
        const months = getBusinessThursdayMonths(year);

        $("thursdayCalendar").innerHTML = months.map((dates, index) => `
          <div class="month">
            <div class="month-title">${I18N[currentLang].months[index]}</div>
            <div class="pills">
              ${dates.map(date => `<span class="pill">${formatDate(date)}</span>`).join("")}
            </div>
          </div>
        `).join("");
      }


      let daysCalcMode = "between";

      function parseSimpleDate(value) {
        const raw = String(value || "").trim();
        if (!raw) return null;

        const compact = raw.replace(/\D/g, "");
        let day, month, year;

        if (/^\d{4}$/.test(compact)) {
          day = Number(compact.slice(0, 2));
          month = Number(compact.slice(2, 4));
          year = new Date().getFullYear();
        } else if (/^\d{8}$/.test(compact)) {
          day = Number(compact.slice(0, 2));
          month = Number(compact.slice(2, 4));
          year = Number(compact.slice(4, 8));
        } else {
          const parts = raw.replace(/[\/\-\s]+/g, ".").split(".").filter(Boolean);
          if (parts.length < 2 || parts.length > 3) return null;
          day = Number(parts[0]);
          month = Number(parts[1]);
          year = parts[2] ? Number(parts[2]) : new Date().getFullYear();
        }

        const d = new Date(year, month - 1, day);
        if (
          !Number.isInteger(day) ||
          !Number.isInteger(month) ||
          !Number.isInteger(year) ||
          d.getFullYear() !== year ||
          d.getMonth() !== month - 1 ||
          d.getDate() !== day
        ) return null;

        return d;
      }

      function renderDaysCalculator() {
        const secondDateField = $("daysSecondDateField");
        const numberField = $("daysNumberField");
        const symbol = $("daysSymbol");

        const isBetween = daysCalcMode === "between";
        secondDateField.hidden = !isBetween;
        numberField.hidden = isBetween;
        symbol.textContent = isBetween ? "→" : "＋";

        document.querySelectorAll(".days-mode-btn").forEach(btn => {
          btn.classList.toggle("active", btn.dataset.daysMode === daysCalcMode);
        });

        calculateDaysTool();
      }

      function calculateDaysTool() {
        const box = $("daysCalcResult");
        if (!box) return;

        const main = box.querySelector(".days-result-main");
        const sub = box.querySelector(".days-result-sub");
        const from = parseSimpleDate($("daysDateFrom").value);

        if (!from) {
          main.textContent = "—";
          sub.textContent = t("daysCalcWaiting");
          return;
        }

        if (daysCalcMode === "between") {
          const to = parseSimpleDate($("daysDateTo").value);
          if (!to) {
            main.textContent = "—";
            sub.textContent = t("daysCalcWaiting");
            return;
          }

          const diff = Math.round((to - from) / 86400000);
          main.textContent = `${Math.abs(diff)} ${t("daysResultDays")}`;
          sub.textContent = `${formatDate(from)} → ${formatDate(to)}`;
          return;
        }

        const amount = Number($("daysNumber").value);
        if (!Number.isInteger(amount)) {
          main.textContent = "—";
          sub.textContent = t("daysCalcWaiting");
          return;
        }

        const result = addDays(from, amount);
        main.textContent = formatDate(result);
        sub.textContent = `${amount >= 0 ? "+" : ""}${amount} ${t("daysResultDays")} · ${dayName(result)}`;
      }

      function setTodayInDaysCalculator() {
        const now = todayStart();
        $("daysDateFrom").value = formatShortDate(now);
      }


      function debounce(fn, delay = 150) {
        let timer = null;

        return function () {
          clearTimeout(timer);
          timer = setTimeout(fn, delay);
        };
      }

      const scheduleFcr = debounce(calculateFcr);
      const scheduleFsd = debounce(calculateFsd);
      const scheduleAcceleration = debounce(calculateAcceleration);
      const scheduleCounter = debounce(updateCounter);

      function bindEnter(ids, callback) {
        ids.forEach(id => {
          $(id).addEventListener("keydown", event => {
            if (event.key === "Enter") {
              event.preventDefault();
              callback();
            }
          });
        });
      }

      function setLanguage(lang) {
        currentLang = lang;
        renderStaticText();
        renderControls();
        renderFsdCalendar();
        renderThursdayCalendar();
        calculateFcr();
        calculateFsd();
        calculateAcceleration();
        updateCounter();
        calculateDaysTool();
      }

      function bindEvents() {
        document.querySelectorAll(".lang-btn").forEach(button => {
          button.addEventListener("click", () => setLanguage(button.dataset.lang));
        });

        document.querySelectorAll(".days-mode-btn").forEach(button => {
          button.addEventListener("click", () => {
            daysCalcMode = button.dataset.daysMode;
            renderDaysCalculator();
          });
        });

        ["daysDateFrom", "daysDateTo", "daysNumber"].forEach(id => {
          $(id).addEventListener("input", calculateDaysTool);
          $(id).addEventListener("blur", () => {
            if (id !== "daysNumber") {
              const parsed = parseSimpleDate($(id).value);
              if (parsed) $(id).value = formatShortDate(parsed);
            }
            calculateDaysTool();
          });
        });

        bindEnter(["fsdText"], calculateFcr);
        bindEnter(["fcrText"], calculateFsd);
        bindEnter(["accelFcrText"], calculateAcceleration);
        bindEnter(["manualFcr"], updateCounter);
        bindEnter(["newCountry", "newPoint", "newMethod", "newDays"], addOrUpdateLane);

        $("fsdText").addEventListener("input", () => {
          $("fsdText").classList.remove("is-error");
          if ($("fsdCalendarPanel").classList.contains("show")) renderFsdCalendar();
          scheduleFcr();
        });

        $("fcrText").addEventListener("input", () => {
          $("fcrText").classList.remove("is-error");
          scheduleFsd();
        });

        $("accelFcrText").addEventListener("input", () => {
          $("accelFcrText").classList.remove("is-error");
          scheduleAcceleration();
        });

        $("manualFcr").addEventListener("input", () => {
          $("manualFcr").classList.remove("is-error");
          scheduleCounter();
        });

        ["fsdText", "fcrText", "accelFcrText", "manualFcr"].forEach(id => {
          $(id).addEventListener("blur", () => {
            if (id === "fsdText") {
              normalizeDateField("fsdText", "fsdYear");
              calculateFcr();
            }

            if (id === "fcrText") {
              normalizeDateField("fcrText", "fcrYear");
              calculateFsd();
            }

            if (id === "accelFcrText") {
              normalizeDateField("accelFcrText", "accelYear");
              calculateAcceleration();
            }

            if (id === "manualFcr") {
              normalizeDateField("manualFcr", "manualYear");
              updateCounter();
            }
          });
        });

        $("toggleFsdCalendar").addEventListener("click", () => {
          syncCalendarToInput();
          renderFsdCalendar();
          $("fsdCalendarPanel").classList.toggle("show");
          $("toggleFsdCalendar").classList.toggle("active", $("fsdCalendarPanel").classList.contains("show"));
        });

        $("prevFsdMonth").addEventListener("click", () => {
          fsdCalendarMonth--;

          if (fsdCalendarMonth < 0) {
            fsdCalendarMonth = 11;
            fsdCalendarYear--;
          }

          renderFsdCalendar();
        });

        $("nextFsdMonth").addEventListener("click", () => {
          fsdCalendarMonth++;

          if (fsdCalendarMonth > 11) {
            fsdCalendarMonth = 0;
            fsdCalendarYear++;
          }

          renderFsdCalendar();
        });

        $("fsdCalendarGrid").addEventListener("click", event => {
          const target = event.target;

          if (target.classList.contains("calendar-thursday")) {
            const date = parseTextDate(target.getAttribute("data-date"), Number($("fsdYear").value));
            setFsdDate(date);
          }
        });

        $("fsdYear").addEventListener("change", () => {
          syncCalendarToInput();
          renderFsdCalendar();
          calculateFcr();
        });

        $("countryFromFsd").addEventListener("change", () => {
          renderLaneSelect("countryFromFsd", "laneFromFsd");
          calculateFcr();
        });

        $("laneFromFsd").addEventListener("change", calculateFcr);

        $("countryFromFcr").addEventListener("change", () => {
          renderLaneSelect("countryFromFcr", "laneFromFcr");
          calculateFsd();
        });

        $("laneFromFcr").addEventListener("change", calculateFsd);
        $("fcrYear").addEventListener("change", calculateFsd);

        $("accelCountry").addEventListener("change", calculateAcceleration);
        $("accelYear").addEventListener("change", calculateAcceleration);
        $("calcAcceleration").addEventListener("click", calculateAcceleration);

        $("counterSource").addEventListener("change", updateCounter);
        $("manualYear").addEventListener("change", updateCounter);

        $("saveLane").addEventListener("click", addOrUpdateLane);
        $("resetLanes").addEventListener("click", resetLanes);
        $("calendarYear").addEventListener("change", renderThursdayCalendar);

        $("toTop").addEventListener("click", () => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        });

        window.addEventListener("scroll", () => {
          $("toTop").classList.toggle("show", window.scrollY > 420);
        }, { passive: true });

        document.addEventListener("click", event => {
          const target = event.target;

          if (target.classList.contains("choose-fsd")) {
            const date = parseTextDate(target.getAttribute("data-date"), Number($("fsdYear").value));
            setFsdDate(date);
          }

          if (target.classList.contains("delete-lane")) {
            const index = Number(target.getAttribute("data-index"));

            if (lanes.length <= 1) {
              alert(currentLang === "ru" ? "Нельзя удалить последнюю строку." : "You cannot delete the last row.");
              return;
            }

            lanes.splice(index, 1);
            saveLanes();
            renderControls();
            calculateFcr();
            calculateFsd();
            calculateAcceleration();
          }
        });
      }



      function initStaticGame(){document.querySelectorAll('.app-tab').forEach(btn=>btn.addEventListener('click',()=>{const id=btn.getAttribute('data-panel');document.querySelectorAll('.app-tab').forEach(x=>{x.classList.toggle('active',x===btn);x.setAttribute('aria-pressed',String(x===btn));});document.querySelectorAll('.app-panel').forEach(p=>p.classList.toggle('active',p.id===id));}));}
      function init() {
        const today = todayStart();

        fsdCalendarYear = Number($("fsdYear").value);
        fsdCalendarMonth = today.getMonth();

        renderStaticText();
        renderControls();
        renderFsdCalendar();
        renderThursdayCalendar();
        setTodayInDaysCalculator();
        bindEvents();
        renderDaysCalculator();
        updateCounter();
        initStaticGame();
      }

      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
      } else {
        init();
      }
    })();
  