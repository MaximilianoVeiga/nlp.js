/*
 * Copyright (c) AXA Group Operations Spain S.A.
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * 'Software'), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

const { Among, BaseStemmer } = require('@nlpjs/core');

/* eslint-disable */

class StemmerBr extends BaseStemmer {
  constructor(container) {
    super(container);
    this.name = 'stemmer-br';
    this.I_p2 = 0;
    this.I_p1 = 0;
    this.I_pV = 0;
  }

  copy_from(other) {
    this.I_p2 = other.I_p2;
    this.I_p1 = other.I_p1;
    this.I_pV = other.I_pV;
    super.copy_from(other);
  }

  r_prelude() {
    let among_var;
    let v_1;
    // repeat, line 36
    replab0: while (true) {
      v_1 = this.cursor;
      let lab1 = true;
      lab1: while (lab1 == true) {
        lab1 = false;
        // (, line 36
        // [, line 37
        this.bra = this.cursor;
        // substring, line 37
        among_var = this.find_among(StemmerBr.a_0, 3);
        if (among_var == 0) {
          break;
        }
        // ], line 37
        this.ket = this.cursor;
        switch (among_var) {
          case 0:
            break lab1;
          case 1:
            // (, line 38
            // <-, line 38
            if (!this.slice_from('a~')) {
              return false;
            }
            break;
          case 2:
            // (, line 39
            // <-, line 39
            if (!this.slice_from('o~')) {
              return false;
            }
            break;
          case 3:
            // (, line 40
            // next, line 40
            if (this.cursor >= this.limit) {
              break lab1;
            }
            this.cursor++;
            break;
        }
        continue replab0;
      }
      this.cursor = v_1;
      break;
    }
    return true;
  }

  r_mark_regions() {
    let v_1;
    let v_2;
    let v_3;
    let v_6;
    let v_8;
    // (, line 44
    this.I_pV = this.limit;
    this.I_p1 = this.limit;
    this.I_p2 = this.limit;
    // do, line 50
    v_1 = this.cursor;
    let lab0 = true;
    lab0: while (lab0 == true) {
      lab0 = false;
      // (, line 50
      // or, line 52
      let lab1 = true;
      lab1: while (lab1 == true) {
        lab1 = false;
        v_2 = this.cursor;
        let lab2 = true;
        lab2: while (lab2 == true) {
          lab2 = false;
          // (, line 51
          if (!this.in_grouping(StemmerBr.g_v, 97, 250)) {
            break;
          }
          // or, line 51
          let lab3 = true;
          lab3: while (lab3 == true) {
            lab3 = false;
            v_3 = this.cursor;
            let lab4 = true;
            lab4: while (lab4 == true) {
              lab4 = false;
              // (, line 51
              if (!this.out_grouping(StemmerBr.g_v, 97, 250)) {
                break;
              }
              // gopast, line 51
              golab5: while (true) {
                let lab6 = true;
                while (lab6 == true) {
                  lab6 = false;
                  if (!this.in_grouping(StemmerBr.g_v, 97, 250)) {
                    break;
                  }
                  break golab5;
                }
                if (this.cursor >= this.limit) {
                  break lab4;
                }
                this.cursor++;
              }
              break lab3;
            }
            this.cursor = v_3;
            // (, line 51
            if (!this.in_grouping(StemmerBr.g_v, 97, 250)) {
              break lab2;
            }
            // gopast, line 51
            golab7: while (true) {
              let lab8 = true;
              while (lab8 == true) {
                lab8 = false;
                if (!this.out_grouping(StemmerBr.g_v, 97, 250)) {
                  break;
                }
                break golab7;
              }
              if (this.cursor >= this.limit) {
                break lab2;
              }
              this.cursor++;
            }
          }
          break lab1;
        }
        this.cursor = v_2;
        // (, line 53
        if (!this.out_grouping(StemmerBr.g_v, 97, 250)) {
          break lab0;
        }
        // or, line 53
        let lab9 = true;
        lab9: while (lab9 == true) {
          lab9 = false;
          v_6 = this.cursor;
          let lab10 = true;
          lab10: while (lab10 == true) {
            lab10 = false;
            // (, line 53
            if (!this.out_grouping(StemmerBr.g_v, 97, 250)) {
              break;
            }
            // gopast, line 53
            golab11: while (true) {
              let lab12 = true;
              while (lab12 == true) {
                lab12 = false;
                if (!this.in_grouping(StemmerBr.g_v, 97, 250)) {
                  break;
                }
                break golab11;
              }
              if (this.cursor >= this.limit) {
                break lab10;
              }
              this.cursor++;
            }
            break lab9;
          }
          this.cursor = v_6;
          // (, line 53
          if (!this.in_grouping(StemmerBr.g_v, 97, 250)) {
            break lab0;
          }
          // next, line 53
          if (this.cursor >= this.limit) {
            break lab0;
          }
          this.cursor++;
        }
      }
      // setmark pV, line 54
      this.I_pV = this.cursor;
    }
    this.cursor = v_1;
    // do, line 56
    v_8 = this.cursor;
    let lab13 = true;
    lab13: while (lab13 == true) {
      lab13 = false;
      // (, line 56
      // gopast, line 57
      golab14: while (true) {
        let lab15 = true;
        while (lab15 == true) {
          lab15 = false;
          if (!this.in_grouping(StemmerBr.g_v, 97, 250)) {
            break;
          }
          break golab14;
        }
        if (this.cursor >= this.limit) {
          break lab13;
        }
        this.cursor++;
      }
      // gopast, line 57
      golab16: while (true) {
        let lab17 = true;
        while (lab17 == true) {
          lab17 = false;
          if (!this.out_grouping(StemmerBr.g_v, 97, 250)) {
            break;
          }
          break golab16;
        }
        if (this.cursor >= this.limit) {
          break lab13;
        }
        this.cursor++;
      }
      // setmark p1, line 57
      this.I_p1 = this.cursor;
      // gopast, line 58
      golab18: while (true) {
        let lab19 = true;
        while (lab19 == true) {
          lab19 = false;
          if (!this.in_grouping(StemmerBr.g_v, 97, 250)) {
            break;
          }
          break golab18;
        }
        if (this.cursor >= this.limit) {
          break lab13;
        }
        this.cursor++;
      }
      // gopast, line 58
      golab20: while (true) {
        let lab21 = true;
        while (lab21 == true) {
          lab21 = false;
          if (!this.out_grouping(StemmerBr.g_v, 97, 250)) {
            break;
          }
          break golab20;
        }
        if (this.cursor >= this.limit) {
          break lab13;
        }
        this.cursor++;
      }
      // setmark p2, line 58
      this.I_p2 = this.cursor;
    }
    this.cursor = v_8;
    return true;
  }

  r_postlude() {
    let among_var;
    let v_1;
    // repeat, line 62
    replab0: while (true) {
      v_1 = this.cursor;
      let lab1 = true;
      lab1: while (lab1 == true) {
        lab1 = false;
        // (, line 62
        // [, line 63
        this.bra = this.cursor;
        // substring, line 63
        among_var = this.find_among(StemmerBr.a_1, 3);
        if (among_var == 0) {
          break;
        }
        // ], line 63
        this.ket = this.cursor;
        switch (among_var) {
          case 0:
            break lab1;
          case 1:
            // (, line 64
            // <-, line 64
            if (!this.slice_from('\u00E3')) {
              return false;
            }
            break;
          case 2:
            // (, line 65
            // <-, line 65
            if (!this.slice_from('\u00F5')) {
              return false;
            }
            break;
          case 3:
            // (, line 66
            // next, line 66
            if (this.cursor >= this.limit) {
              break lab1;
            }
            this.cursor++;
            break;
        }
        continue replab0;
      }
      this.cursor = v_1;
      break;
    }
    return true;
  }

  r_RV() {
    if (!(this.I_pV <= this.cursor)) {
      return false;
    }
    return true;
  }

  r_R1() {
    if (!(this.I_p1 <= this.cursor)) {
      return false;
    }
    return true;
  }

  r_R2() {
    if (!(this.I_p2 <= this.cursor)) {
      return false;
    }
    return true;
  }

  r_standard_suffix() {
    let among_var;
    let v_1;
    let v_2;
    let v_3;
    let v_4;
    // (, line 76
    // [, line 77
    this.ket = this.cursor;
    // substring, line 77
    among_var = this.find_among_b(StemmerBr.a_5, 45);
    if (among_var == 0) {
      return false;
    }
    // ], line 77
    this.bra = this.cursor;
    switch (among_var) {
      case 0:
        return false;
      case 1:
        // (, line 92
        // call R2, line 93
        if (!this.r_R2()) {
          return false;
        }
        // delete, line 93
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 2:
        // (, line 97
        // call R2, line 98
        if (!this.r_R2()) {
          return false;
        }
        // <-, line 98
        if (!this.slice_from('log')) {
          return false;
        }
        break;
      case 3:
        // (, line 101
        // call R2, line 102
        if (!this.r_R2()) {
          return false;
        }
        // <-, line 102
        if (!this.slice_from('u')) {
          return false;
        }
        break;
      case 4:
        // (, line 105
        // call R2, line 106
        if (!this.r_R2()) {
          return false;
        }
        // <-, line 106
        if (!this.slice_from('ente')) {
          return false;
        }
        break;
      case 5:
        // (, line 109
        // call R1, line 110
        if (!this.r_R1()) {
          return false;
        }
        // delete, line 110
        if (!this.slice_del()) {
          return false;
        }
        // try, line 111
        v_1 = this.limit - this.cursor;
        var lab0 = true;
        lab0: while (lab0 == true) {
          lab0 = false;
          // (, line 111
          // [, line 112
          this.ket = this.cursor;
          // substring, line 112
          among_var = this.find_among_b(StemmerBr.a_2, 4);
          if (among_var == 0) {
            this.cursor = this.limit - v_1;
            break;
          }
          // ], line 112
          this.bra = this.cursor;
          // call R2, line 112
          if (!this.r_R2()) {
            this.cursor = this.limit - v_1;
            break;
          }
          // delete, line 112
          if (!this.slice_del()) {
            return false;
          }
          switch (among_var) {
            case 0:
              this.cursor = this.limit - v_1;
              break lab0;
            case 1:
              // (, line 113
              // [, line 113
              this.ket = this.cursor;
              // literal, line 113
              if (!this.eq_s_b(2, 'at')) {
                this.cursor = this.limit - v_1;
                break lab0;
              }
              // ], line 113
              this.bra = this.cursor;
              // call R2, line 113
              if (!this.r_R2()) {
                this.cursor = this.limit - v_1;
                break lab0;
              }
              // delete, line 113
              if (!this.slice_del()) {
                return false;
              }
              break;
          }
        }
        break;
      case 6:
        // (, line 121
        // call R2, line 122
        if (!this.r_R2()) {
          return false;
        }
        // delete, line 122
        if (!this.slice_del()) {
          return false;
        }
        // try, line 123
        v_2 = this.limit - this.cursor;
        var lab1 = true;
        lab1: while (lab1 == true) {
          lab1 = false;
          // (, line 123
          // [, line 124
          this.ket = this.cursor;
          // substring, line 124
          among_var = this.find_among_b(StemmerBr.a_3, 3);
          if (among_var == 0) {
            this.cursor = this.limit - v_2;
            break;
          }
          // ], line 124
          this.bra = this.cursor;
          switch (among_var) {
            case 0:
              this.cursor = this.limit - v_2;
              break lab1;
            case 1:
              // (, line 127
              // call R2, line 127
              if (!this.r_R2()) {
                this.cursor = this.limit - v_2;
                break lab1;
              }
              // delete, line 127
              if (!this.slice_del()) {
                return false;
              }
              break;
          }
        }
        break;
      case 7:
        // (, line 133
        // call R2, line 134
        if (!this.r_R2()) {
          return false;
        }
        // delete, line 134
        if (!this.slice_del()) {
          return false;
        }
        // try, line 135
        v_3 = this.limit - this.cursor;
        var lab2 = true;
        lab2: while (lab2 == true) {
          lab2 = false;
          // (, line 135
          // [, line 136
          this.ket = this.cursor;
          // substring, line 136
          among_var = this.find_among_b(StemmerBr.a_4, 3);
          if (among_var == 0) {
            this.cursor = this.limit - v_3;
            break;
          }
          // ], line 136
          this.bra = this.cursor;
          switch (among_var) {
            case 0:
              this.cursor = this.limit - v_3;
              break lab2;
            case 1:
              // (, line 139
              // call R2, line 139
              if (!this.r_R2()) {
                this.cursor = this.limit - v_3;
                break lab2;
              }
              // delete, line 139
              if (!this.slice_del()) {
                return false;
              }
              break;
          }
        }
        break;
      case 8:
        // (, line 145
        // call R2, line 146
        if (!this.r_R2()) {
          return false;
        }
        // delete, line 146
        if (!this.slice_del()) {
          return false;
        }
        // try, line 147
        v_4 = this.limit - this.cursor;
        var lab3 = true;
        while (lab3 == true) {
          lab3 = false;
          // (, line 147
          // [, line 148
          this.ket = this.cursor;
          // literal, line 148
          if (!this.eq_s_b(2, 'at')) {
            this.cursor = this.limit - v_4;
            break;
          }
          // ], line 148
          this.bra = this.cursor;
          // call R2, line 148
          if (!this.r_R2()) {
            this.cursor = this.limit - v_4;
            break;
          }
          // delete, line 148
          if (!this.slice_del()) {
            return false;
          }
        }
        break;
      case 9:
        // (, line 152
        // call RV, line 153
        if (!this.r_RV()) {
          return false;
        }
        // literal, line 153
        if (!this.eq_s_b(1, 'e')) {
          return false;
        }
        // <-, line 154
        if (!this.slice_from('ir')) {
          return false;
        }
        break;
    }
    return true;
  }

  r_verb_suffix() {
    let among_var;
    let v_1;
    let v_2;
    // setlimit, line 159
    v_1 = this.limit - this.cursor;
    // tomark, line 159
    if (this.cursor < this.I_pV) {
      return false;
    }
    this.cursor = this.I_pV;
    v_2 = this.limit_backward;
    this.limit_backward = this.cursor;
    this.cursor = this.limit - v_1;
    // (, line 159
    // [, line 160
    this.ket = this.cursor;
    // substring, line 160
    among_var = this.find_among_b(StemmerBr.a_6, 120);
    if (among_var == 0) {
      this.limit_backward = v_2;
      return false;
    }
    // ], line 160
    this.bra = this.cursor;
    switch (among_var) {
      case 0:
        this.limit_backward = v_2;
        return false;
      case 1:
        // (, line 179
        // delete, line 179
        if (!this.slice_del()) {
          return false;
        }
        break;
    }
    this.limit_backward = v_2;
    return true;
  }

  r_residual_suffix() {
    let among_var;
    // (, line 183
    // [, line 184
    this.ket = this.cursor;
    // substring, line 184
    among_var = this.find_among_b(StemmerBr.a_7, 7);
    if (among_var == 0) {
      return false;
    }
    // ], line 184
    this.bra = this.cursor;
    switch (among_var) {
      case 0:
        return false;
      case 1:
        // (, line 187
        // call RV, line 187
        if (!this.r_RV()) {
          return false;
        }
        // delete, line 187
        if (!this.slice_del()) {
          return false;
        }
        break;
    }
    return true;
  }

  r_residual_form() {
    let among_var;
    let v_1;
    let v_2;
    let v_3;
    // (, line 191
    // [, line 192
    this.ket = this.cursor;
    // substring, line 192
    among_var = this.find_among_b(StemmerBr.a_8, 4);
    if (among_var == 0) {
      return false;
    }
    // ], line 192
    this.bra = this.cursor;
    switch (among_var) {
      case 0:
        return false;
      case 1:
        // (, line 194
        // call RV, line 194
        if (!this.r_RV()) {
          return false;
        }
        // delete, line 194
        if (!this.slice_del()) {
          return false;
        }
        // [, line 194
        this.ket = this.cursor;
        // or, line 194
        var lab0 = true;
        lab0: while (lab0 == true) {
          lab0 = false;
          v_1 = this.limit - this.cursor;
          let lab1 = true;
          while (lab1 == true) {
            lab1 = false;
            // (, line 194
            // literal, line 194
            if (!this.eq_s_b(1, 'u')) {
              break;
            }
            // ], line 194
            this.bra = this.cursor;
            // test, line 194
            v_2 = this.limit - this.cursor;
            // literal, line 194
            if (!this.eq_s_b(1, 'g')) {
              break;
            }
            this.cursor = this.limit - v_2;
            break lab0;
          }
          this.cursor = this.limit - v_1;
          // (, line 195
          // literal, line 195
          if (!this.eq_s_b(1, 'i')) {
            return false;
          }
          // ], line 195
          this.bra = this.cursor;
          // test, line 195
          v_3 = this.limit - this.cursor;
          // literal, line 195
          if (!this.eq_s_b(1, 'c')) {
            return false;
          }
          this.cursor = this.limit - v_3;
        }
        // call RV, line 195
        if (!this.r_RV()) {
          return false;
        }
        // delete, line 195
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 2:
        // (, line 196
        // <-, line 196
        if (!this.slice_from('c')) {
          return false;
        }
        break;
    }
    return true;
  }

  innerStem() {
    let v_1;
    let v_2;
    let v_3;
    let v_4;
    let v_5;
    let v_6;
    let v_7;
    let v_8;
    let v_9;
    let v_10;
    // (, line 201
    // do, line 202
    v_1 = this.cursor;
    let lab0 = true;
    while (lab0 == true) {
      lab0 = false;
      // call prelude, line 202
      if (!this.r_prelude()) {
        break;
      }
    }
    this.cursor = v_1;
    // do, line 203
    v_2 = this.cursor;
    let lab1 = true;
    while (lab1 == true) {
      lab1 = false;
      // call mark_regions, line 203
      if (!this.r_mark_regions()) {
        break;
      }
    }
    this.cursor = v_2;
    // backwards, line 204
    this.limit_backward = this.cursor;
    this.cursor = this.limit;
    // (, line 204
    // do, line 205
    v_3 = this.limit - this.cursor;
    let lab2 = true;
    lab2: while (lab2 == true) {
      lab2 = false;
      // (, line 205
      // or, line 209
      let lab3 = true;
      lab3: while (lab3 == true) {
        lab3 = false;
        v_4 = this.limit - this.cursor;
        let lab4 = true;
        lab4: while (lab4 == true) {
          lab4 = false;
          // (, line 206
          // and, line 207
          v_5 = this.limit - this.cursor;
          // (, line 206
          // or, line 206
          let lab5 = true;
          lab5: while (lab5 == true) {
            lab5 = false;
            v_6 = this.limit - this.cursor;
            let lab6 = true;
            while (lab6 == true) {
              lab6 = false;
              // call standard_suffix, line 206
              if (!this.r_standard_suffix()) {
                break;
              }
              break lab5;
            }
            this.cursor = this.limit - v_6;
            // call verb_suffix, line 206
            if (!this.r_verb_suffix()) {
              break lab4;
            }
          }
          this.cursor = this.limit - v_5;
          // do, line 207
          v_7 = this.limit - this.cursor;
          let lab7 = true;
          while (lab7 == true) {
            lab7 = false;
            // (, line 207
            // [, line 207
            this.ket = this.cursor;
            // literal, line 207
            if (!this.eq_s_b(1, 'i')) {
              break;
            }
            // ], line 207
            this.bra = this.cursor;
            // test, line 207
            v_8 = this.limit - this.cursor;
            // literal, line 207
            if (!this.eq_s_b(1, 'c')) {
              break;
            }
            this.cursor = this.limit - v_8;
            // call RV, line 207
            if (!this.r_RV()) {
              break;
            }
            // delete, line 207
            if (!this.slice_del()) {
              return false;
            }
          }
          this.cursor = this.limit - v_7;
          break lab3;
        }
        this.cursor = this.limit - v_4;
        // call residual_suffix, line 209
        if (!this.r_residual_suffix()) {
          break lab2;
        }
      }
    }
    this.cursor = this.limit - v_3;
    // do, line 211
    v_9 = this.limit - this.cursor;
    let lab8 = true;
    while (lab8 == true) {
      lab8 = false;
      // call residual_form, line 211
      if (!this.r_residual_form()) {
        break;
      }
    }
    this.cursor = this.limit - v_9;
    this.cursor = this.limit_backward; // do, line 213
    v_10 = this.cursor;
    let lab9 = true;
    while (lab9 == true) {
      lab9 = false;
      // call postlude, line 213
      if (!this.r_postlude()) {
        break;
      }
    }
    this.cursor = v_10;
    return true;
  }
}

StemmerBr.methodObject = new StemmerBr();

StemmerBr.a_0 = [
  new Among('', -1, 3),
  new Among('\u00E3', 0, 1),
  new Among('\u00F5', 0, 2)
];

StemmerBr.a_1 = [
  new Among('', -1, 3),
  new Among('a~', 0, 1),
  new Among('o~', 0, 2)
];

StemmerBr.a_2 = [
  new Among('ic', -1, -1),
  new Among('ad', -1, -1),
  new Among('os', -1, -1),
  new Among('iv', -1, 1)
];

StemmerBr.a_3 = [
  new Among('ante', -1, 1),
  new Among('avel', -1, 1),
  new Among('\u00EDvel', -1, 1)
];

StemmerBr.a_4 = [
  new Among('ic', -1, 1),
  new Among('abil', -1, 1),
  new Among('iv', -1, 1)
];

StemmerBr.a_5 = [
  new Among('ica', -1, 1),
  new Among('\u00E2ncia', -1, 1),
  new Among('\u00EAncia', -1, 4),
  new Among('ira', -1, 9),
  new Among('adora', -1, 1),
  new Among('osa', -1, 1),
  new Among('ista', -1, 1),
  new Among('iva', -1, 8),
  new Among('eza', -1, 1),
  new Among('log\u00EDa', -1, 2),
  new Among('idade', -1, 7),
  new Among('ante', -1, 1),
  new Among('mente', -1, 6),
  new Among('amente', 12, 5),
  new Among('\u00E1vel', -1, 1),
  new Among('\u00EDvel', -1, 1),
  new Among('uci\u00F3n', -1, 3),
  new Among('ico', -1, 1),
  new Among('ismo', -1, 1),
  new Among('oso', -1, 1),
  new Among('amento', -1, 1),
  new Among('imento', -1, 1),
  new Among('ivo', -1, 8),
  new Among('a\u00E7a~o', -1, 1),
  new Among('ador', -1, 1),
  new Among('icas', -1, 1),
  new Among('\u00EAncias', -1, 4),
  new Among('iras', -1, 9),
  new Among('adoras', -1, 1),
  new Among('osas', -1, 1),
  new Among('istas', -1, 1),
  new Among('ivas', -1, 8),
  new Among('ezas', -1, 1),
  new Among('log\u00EDas', -1, 2),
  new Among('idades', -1, 7),
  new Among('uciones', -1, 3),
  new Among('adores', -1, 1),
  new Among('antes', -1, 1),
  new Among('a\u00E7o~es', -1, 1),
  new Among('icos', -1, 1),
  new Among('ismos', -1, 1),
  new Among('osos', -1, 1),
  new Among('amentos', -1, 1),
  new Among('imentos', -1, 1),
  new Among('ivos', -1, 8)
];

StemmerBr.a_6 = [
  new Among('ada', -1, 1),
  new Among('ida', -1, 1),
  new Among('ia', -1, 1),
  new Among('aria', 2, 1),
  new Among('eria', 2, 1),
  new Among('iria', 2, 1),
  new Among('ara', -1, 1),
  new Among('era', -1, 1),
  new Among('ira', -1, 1),
  new Among('ava', -1, 1),
  new Among('asse', -1, 1),
  new Among('esse', -1, 1),
  new Among('isse', -1, 1),
  new Among('aste', -1, 1),
  new Among('este', -1, 1),
  new Among('iste', -1, 1),
  new Among('ei', -1, 1),
  new Among('arei', 16, 1),
  new Among('erei', 16, 1),
  new Among('irei', 16, 1),
  new Among('am', -1, 1),
  new Among('iam', 20, 1),
  new Among('ariam', 21, 1),
  new Among('eriam', 21, 1),
  new Among('iriam', 21, 1),
  new Among('aram', 20, 1),
  new Among('eram', 20, 1),
  new Among('iram', 20, 1),
  new Among('avam', 20, 1),
  new Among('em', -1, 1),
  new Among('arem', 29, 1),
  new Among('erem', 29, 1),
  new Among('irem', 29, 1),
  new Among('assem', 29, 1),
  new Among('essem', 29, 1),
  new Among('issem', 29, 1),
  new Among('ado', -1, 1),
  new Among('ido', -1, 1),
  new Among('ando', -1, 1),
  new Among('endo', -1, 1),
  new Among('indo', -1, 1),
  new Among('ara~o', -1, 1),
  new Among('era~o', -1, 1),
  new Among('ira~o', -1, 1),
  new Among('ar', -1, 1),
  new Among('er', -1, 1),
  new Among('ir', -1, 1),
  new Among('as', -1, 1),
  new Among('adas', 47, 1),
  new Among('idas', 47, 1),
  new Among('ias', 47, 1),
  new Among('arias', 50, 1),
  new Among('erias', 50, 1),
  new Among('irias', 50, 1),
  new Among('aras', 47, 1),
  new Among('eras', 47, 1),
  new Among('iras', 47, 1),
  new Among('avas', 47, 1),
  new Among('es', -1, 1),
  new Among('ardes', 58, 1),
  new Among('erdes', 58, 1),
  new Among('irdes', 58, 1),
  new Among('ares', 58, 1),
  new Among('eres', 58, 1),
  new Among('ires', 58, 1),
  new Among('asses', 58, 1),
  new Among('esses', 58, 1),
  new Among('isses', 58, 1),
  new Among('astes', 58, 1),
  new Among('estes', 58, 1),
  new Among('istes', 58, 1),
  new Among('is', -1, 1),
  new Among('ais', 71, 1),
  new Among('eis', 71, 1),
  new Among('areis', 73, 1),
  new Among('ereis', 73, 1),
  new Among('ireis', 73, 1),
  new Among('\u00E1reis', 73, 1),
  new Among('\u00E9reis', 73, 1),
  new Among('\u00EDreis', 73, 1),
  new Among('\u00E1sseis', 73, 1),
  new Among('\u00E9sseis', 73, 1),
  new Among('\u00EDsseis', 73, 1),
  new Among('\u00E1veis', 73, 1),
  new Among('\u00EDeis', 73, 1),
  new Among('ar\u00EDeis', 84, 1),
  new Among('er\u00EDeis', 84, 1),
  new Among('ir\u00EDeis', 84, 1),
  new Among('ados', -1, 1),
  new Among('idos', -1, 1),
  new Among('amos', -1, 1),
  new Among('\u00E1ramos', 90, 1),
  new Among('\u00E9ramos', 90, 1),
  new Among('\u00EDramos', 90, 1),
  new Among('\u00E1vamos', 90, 1),
  new Among('\u00EDamos', 90, 1),
  new Among('ar\u00EDamos', 95, 1),
  new Among('er\u00EDamos', 95, 1),
  new Among('ir\u00EDamos', 95, 1),
  new Among('emos', -1, 1),
  new Among('aremos', 99, 1),
  new Among('eremos', 99, 1),
  new Among('iremos', 99, 1),
  new Among('\u00E1ssemos', 99, 1),
  new Among('\u00EAssemos', 99, 1),
  new Among('\u00EDssemos', 99, 1),
  new Among('imos', -1, 1),
  new Among('armos', -1, 1),
  new Among('ermos', -1, 1),
  new Among('irmos', -1, 1),
  new Among('\u00E1mos', -1, 1),
  new Among('ar\u00E1s', -1, 1),
  new Among('er\u00E1s', -1, 1),
  new Among('ir\u00E1s', -1, 1),
  new Among('eu', -1, 1),
  new Among('iu', -1, 1),
  new Among('ou', -1, 1),
  new Among('ar\u00E1', -1, 1),
  new Among('er\u00E1', -1, 1),
  new Among('ir\u00E1', -1, 1)
];

StemmerBr.a_7 = [
  new Among('a', -1, 1),
  new Among('i', -1, 1),
  new Among('o', -1, 1),
  new Among('os', -1, 1),
  new Among('\u00E1', -1, 1),
  new Among('\u00ED', -1, 1),
  new Among('\u00F3', -1, 1)
];

StemmerBr.a_8 = [
  new Among('e', -1, 1),
  new Among('\u00E7', -1, 2),
  new Among('\u00E9', -1, 1),
  new Among('\u00EA', -1, 1)
];

StemmerBr.g_v = [
  17,
  65,
  16,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  3,
  19,
  12,
  2
];

module.exports = StemmerBr;
