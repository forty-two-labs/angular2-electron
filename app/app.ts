import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';

@Component({
  selector: 'app',
  template: `
    <div class="window">
      <div class="window-content">
        <div class="pane-group">
          <div class="pane-one-fourth sidebar">
            <nav class="nav-group">
              <br />
              <a class="nav-group-item active">
                <span class="icon icon-home"></span>
                Home
              </a>
              <span class="nav-group-item">
                <span class="icon icon-download"></span>
                Downloads
              </span>

              <hr />

              <ul class="list-group">
                <li class="list-group-header">
                  <input class="form-control" type="text" placeholder="Search for someone">
                </li>
                <li class="list-group-item">
                  <img class="img-circle media-object pull-left" src="http://placehold.it/32x32" width="32" height="32">
                  <div class="media-body">
                    <strong>List item title</strong>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                </li>
                <li class="list-group-item">
                  <img class="img-circle media-object pull-left" src="http://placehold.it/32x32" width="32" height="32">
                  <div class="media-body">
                    <strong>List item title</strong>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
          <div class="pane padded">
            <form>
              <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control" placeholder="Email">
              </div>
              <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control" placeholder="Password">
              </div>
              <div class="form-group">
                <label>Description</label>
                <textarea class="form-control" rows="3"></textarea>
              </div>
              <select class="form-control">
                <option>Option one</option>
                <option>Option two</option>
                <option>Option three</option>
                <option>Option four</option>
                <option>Option five</option>
                <option>Option six</option>
                <option>Option seven</option>
                <option>Option eight</option>
              </select>
              <div class="checkbox">
                <label>
                  <input type="checkbox"> This is a checkbox
                </label>
              </div>
              <div class="checkbox">
                <label>
                  <input type="checkbox"> This is a checkbox too
                </label>
              </div>
              <div class="radio">
                <label>
                  <input type="radio" name="radios" checked>
                  Keep your options open
                </label>
              </div>
              <div class="radio">
                <label>
                  <input type="radio" name="radios">
                  Be sure to remember to check for unknown unknowns
                </label>
              </div>
              <div class="form-actions">
                <button type="submit" class="btn btn-form btn-default">Cancel</button>
                <button type="submit" class="btn btn-form btn-primary">OK</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <footer class="toolbar toolbar-footer">
        <h1 class="title">Footer</h1>
      </footer>
    </div>
  `
})

export class App {
  constructor() {}
}

bootstrap(App);
