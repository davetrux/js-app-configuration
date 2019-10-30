# Environment Configuration for JavaScript Apps

![Twitter Follow](https://img.shields.io/twitter/follow/davetrux?style=social)

Repository for my talk presented at CodeMash 2020. It is a set of simplistic React.js and Vue.js applicatons that demonstrate how these client-side JavaScript apps behave with different configuration techniqes.

## Prerequisities
To run the apps locally, you need the LTS version of Node.js installed. Each app also has it's own README file.

Each of the apps has a DevOps component that assumes you have an instance of Jenkins available. Jenkins packages the apps into Docker containers, and then deploys them either to Docker or Kubernetes. So in order to run those parts of the demo you need an instance of Docker or a Kubernetes cluster (local is fine) to deploy them into.

For the demo I have Docker Desktop installed on my Macbook with Kubernetes enabled. My Jenkins instances is deployed in my local cluster.

## License 
<!--- If you're not sure which open license to use see https://choosealicense.com/--->

This project uses the following license:

MIT License

Copyright (c) 2019 David Truxall

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
