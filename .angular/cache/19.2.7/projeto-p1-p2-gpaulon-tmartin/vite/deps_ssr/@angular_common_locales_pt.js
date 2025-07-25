import { createRequire } from 'module';const require = createRequire(import.meta.url);
import "./chunk-YHCV7DAQ.js";

// node_modules/@angular/common/locales/pt.mjs
var u = void 0;
function plural(val) {
  const n = val, i = Math.floor(Math.abs(val)), v = val.toString().replace(/^[^.]*\.?/, "").length, e = parseInt(val.toString().replace(/^[^e]*(e([-+]?\d+))?/, "$2")) || 0;
  if (i === Math.floor(i) && i >= 0 && i <= 1) return 1;
  if (e === 0 && !(i === 0) && i % 1e6 === 0 && v === 0 || !(e >= 0 && e <= 5)) return 4;
  return 5;
}
var pt_default = ["pt", [["AM", "PM"], u, u], u, [["D", "S", "T", "Q", "Q", "S", "S"], ["dom.", "seg.", "ter.", "qua.", "qui.", "sex.", "sáb."], ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"], ["dom.", "seg.", "ter.", "qua.", "qui.", "sex.", "sáb."]], u, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["jan.", "fev.", "mar.", "abr.", "mai.", "jun.", "jul.", "ago.", "set.", "out.", "nov.", "dez."], ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]], u, [["a.C.", "d.C."], u, ["antes de Cristo", "depois de Cristo"]], 0, [6, 0], ["dd/MM/y", "d 'de' MMM 'de' y", "d 'de' MMMM 'de' y", "EEEE, d 'de' MMMM 'de' y"], ["HH:mm", "HH:mm:ss", "HH:mm:ss z", "HH:mm:ss zzzz"], ["{1} {0}", u, u, u], [",", ".", ";", "%", "+", "-", "E", "×", "‰", "∞", "NaN", ":"], ["#,##0.###", "#,##0%", "¤ #,##0.00", "#E0"], "BRL", "R$", "Real brasileiro", {
  "AUD": ["AU$", "$"],
  "BYN": [u, "р."],
  "JPY": ["JP¥", "¥"],
  "PHP": [u, "₱"],
  "PTE": ["Esc."],
  "RON": [u, "L"],
  "SYP": [u, "S£"],
  "THB": ["฿"],
  "TWD": ["NT$"],
  "USD": ["US$", "$"]
}, "ltr", plural];
export {
  pt_default as default
};
/*! Bundled license information:

@angular/common/locales/pt.mjs:
  (**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.dev/license
   *)
*/
//# sourceMappingURL=@angular_common_locales_pt.js.map
