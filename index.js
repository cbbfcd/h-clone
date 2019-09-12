/**
 * 波比小金刚（huangteng01@baidu.com）
 */

'use strict';

export default function clone (target) {
    if (target == null) return null;

    const origin = history.state;
    history.replaceState(target, null, '');
    const cp = history.state;
    history.replaceState(origin, null, '');

    return cp;
}